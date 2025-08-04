import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const User = ({ user, index, tableRowVariant }) => {
    const axiosSecure = useAxiosSecure();
    const { data: { eventsCount } = 0 } = useQuery({
        queryKey: ['eventsCount', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/created-events-count/${user?.email}`);
            return res.data
        }
    })


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
            <td className="p-3 capitalize">{user.role || 'user'}</td>
            <td className="p-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.active ? 'bg-green-200 text-green-800' : 'bg-red-100 text-red-600'}`}>
                    {eventsCount}
                </span>
            </td>
        </motion.tr>
    );
};

export default User;