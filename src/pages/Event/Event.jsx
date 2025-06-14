import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const Event = () => {
    const params = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: event } = useQuery({
        queryKey: ["event"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/event/${params.id}`);
            return data
        }
    })

    const { image, title, description } = event;

    const handleJoinEvent = event => {
        const { _id, ...rest } = event;
        const eventData = {
            eventId: _id,
            ...rest,
            user_email: user.email,
            user_name: user.displayName
        };
        console.log(eventData)
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-sm mt-20">
            <figure className="w-full lg:w-1/2">
                <img
                    src={image}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}!</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleJoinEvent(event)} className="btn btn-neutral">Join Event</button>
                </div>
            </div>
        </div>
    );
};

export default Event;