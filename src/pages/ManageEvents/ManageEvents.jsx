import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import ManageEvent from "../../components/ManageEvents/ManageEvent";

const ManageEvents = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: events, isPending } = useQuery({
        queryKey: ["event", user.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/events/${user?.email}`);
            return data
        }
    })

    if (isPending) return <LoadingSpinner />

    return (
        <div className="w-full mx-auto mt-10 space-y-8">
            <h2 className="card-title justify-center text-2xl md:text-4xl">Manage Your Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto md:gap-12 gap-6">
                {
                    events?.map(event => <ManageEvent key={event._id} event={event} />)
                }
            </div>
        </div>
    );
};

export default ManageEvents;