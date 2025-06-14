import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";

const Event = () => {
    const params = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: event, isPending } = useQuery({
        queryKey: ["event"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/event/${params.id}`);
            return data
        }
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (event) => {
            const { data } = await axiosSecure.post("/join-event", event);
            return data
        },
        onSuccess: (data) => {
            console.log(data)
            if (data.acknowledged) {
                toast.success("You have Successfully Joined the Event")
            }
        },
        onError: (error) => {
            console.error(error)
            toast.error("Error occurred")
        }
    })


    const handleJoinEvent = async event => {
        const { _id, ...rest } = event;
        const eventData = {
            eventId: _id,
            ...rest,
            user_email: user.email,
            user_name: user.displayName
        };

        mutateAsync(eventData)

        // console.log(eventData)
    }

    if (isPending) return <LoadingSpinner />
    const { image, title, description } = event;

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