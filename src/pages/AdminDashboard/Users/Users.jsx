import {  useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/shared/LoadingSpinner/LoadingSpinner';
import User from '../../../components/Users/User';

const tableRowVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
        },
    }),
};
const Users = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users, isLoading: usersLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data
        }
    });

    

    if (usersLoading) return <LoadingSpinner />

    return (
        <div className="p-4 md:p-8 bg-green-50 rounded-xl shadow-lg xl:min-w-4xl 2xl:min-w-6xl">
            <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4">User Management</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm md:text-base text-left border border-green-200 rounded-lg bg-white shadow-sm">
                    <thead className="bg-green-100 text-green-900">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Event Arranged</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                          <User user={user} index={index} tableRowVariant={tableRowVariant}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Users;