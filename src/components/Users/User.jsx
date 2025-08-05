import React from 'react';
import { motion } from 'framer-motion';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';


const MySwal = withReactContent(Swal);
const User = ({ user, index, tableRowVariant }) => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: { eventsCount } = 0 } = useQuery({
        queryKey: ['eventsCount', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/created-events-count/${user?.email}`);
            return res.data
        }
    });

    // make admin mutation func
    const { mutateAsync: makeAdminAsync } = useMutation({
        mutationFn: async (email) => {
            const res = await axiosSecure.patch(`/make-admin/${email}`);
            return res.data
        },
        onSuccess: async(data) => {
            queryClient.invalidateQueries(['user']);
            toast.success(`${user?.name} has become admin successfully`);
            console.log(data)
        }
    })

    const handleMakeAdmin = (email) => {
        MySwal.fire({
            title: <strong>Promote {user?.name}?</strong>,
            html: <p>Are you sure you want to make this user an admin?</p>,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, make admin',
            cancelButtonText: 'No, cancel',
            background: '#e8f5e9',
            iconColor: '#1b5e20',
            confirmButtonColor: '#388e3c',
            cancelButtonColor: '#c8e6c9',
        }).then((result) => {
            if (result.isConfirmed) {
                makeAdminAsync(email)
            }
        });
    }

    return (
        <motion.tr
            key={user._id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={tableRowVariant}
            className="border-t hover:bg-green-50 transition-colors"
        >
            <td className="p-3">{index + 1}</td>
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.email}</td>
            {
                user?.role === 'admin' ?
                    < td className="p-3">{user?.role}</td> :
                    < td className="p-3"><button className='cursor-pointer' onClick={() => handleMakeAdmin(user?.email)}>Make Admin</button></td>
            }
            <td className="p-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.active ? 'bg-green-200 text-green-800' : 'bg-red-100 text-red-600'}`}>
                    {eventsCount}
                </span>
            </td>
        </motion.tr >
    );
};

export default User;