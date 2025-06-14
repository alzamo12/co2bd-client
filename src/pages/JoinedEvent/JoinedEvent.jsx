import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import UpcomingEvent from "../../components/UpcomingEvents/UpcomingEvent";
import useAuth from "../../hooks/useAuth";

const JoinedEvent = () => {
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
        <div>
            <h2 className="card-title">Joined Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
                {
                    events?.map(event => <UpcomingEvent event={event} />)
                }
            </div>
        </div>
    );
};

export default JoinedEvent;