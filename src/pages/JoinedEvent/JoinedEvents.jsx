import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import UpcomingEvent from "../../components/UpcomingEvents/UpcomingEvent";
import useAuth from "../../hooks/useAuth";
import JoinedEvent from "../../components/JoinedEvent/JoinedEvent";

const JoinedEvents = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: events, isPending } = useQuery({
        queryKey: ["event"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/joined-events?email=${user.email}`);
            // console.log(res.data)
            return res.data
        }
    });

    if (isPending) return <LoadingSpinner />

    return (
        <div className="space-y-8">
            <h2 className="card-title justify-center text-2xl">Joined Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
                {
                    events?.map(event => <JoinedEvent event={event} />)
                }
            </div>
        </div>
    );
};

export default JoinedEvents;