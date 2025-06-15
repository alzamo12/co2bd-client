import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import ManageEvent from "../../components/ManageEvents/ManageEvent";

const ManageEvents = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: events, isPending } = useQuery({
        queryKey: ["event"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/events?email=${user.email}`);
            // console.log(data)
            return data
        }
    })

    if (isPending) return <LoadingSpinner />

    return (
        <div className="max-w-screen-2xl mx-auto mt-10 space-y-8">
            <h2 className="card-title justify-center text-xl">Manage Your Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto md:gap-12">
                {
                    events?.map(event => <ManageEvent key={event._id} event={event} />)
                }
            </div>
        </div>
    );
};

export default ManageEvents;