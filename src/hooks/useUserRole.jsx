import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserRole = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { data: userRole } = useQuery({
        queryKey: ['userRole', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-role/${user?.email}`);
            // console.log(user.email)
            return res.data
        },
        enabled: !!user
    })
    return userRole
};

export default useUserRole;