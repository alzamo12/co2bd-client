import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import UpcomingEvent from "../../components/UpcomingEvents/UpcomingEvent";
const UpcomingEvents = () => {
    const axiosPublic = useAxiosPublic();

    const { data: upcomingEvents, isPending } = useQuery({
        queryKey: ["upcomingEvent"],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/events");
            // console.log(data)
            return data
        }
    })

    if (isPending) return <LoadingSpinner />

    return (
        <div className="max-w-screen-2xl mx-auto lg:mt-16 md:space-y-10">
            <h2 className="card-title text-5xl justify-center">Upcoming Events Page</h2>
            {/* event */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
                {
                    upcomingEvents?.map(event => <UpcomingEvent event={event} />)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;