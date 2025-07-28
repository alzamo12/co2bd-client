import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Comments from "../../components/Event/Comments";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const Event = () => {
    const params = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [isLiked, setIsLiked] = useState(false)

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
            // console.log(data)
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

    const { _id, image, title, description, type, location, eventDate, name } = event;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm mt-20 mx-2 md:mx-0 ">
                <figure className="w-full lg:w-full">
                    <img
                        src={image}
                        className="w-full"
                        alt="Album" />
                </figure>
                <div className="px-10 py-8 space-y-4 w-full">
                    <h2 className="card-title text-xl">{title}!</h2>
                    <h4 className="card-title">Author name: {name}</h4>
                    <p>{description}</p>
                    {/* <h2 className="card-title text-xl md:text-2xl flex gap-2 items-center">{title}</h2> */}
                    <div className="mt-0">
                        <h2 className="card-title text-lg flex gap-2 items-center"><BiCategory />{type}</h2>
                        <p className="flex gap-2 text-base items-center"><FaMapMarkerAlt />{location}</p>
                        <p className="flex gap-2 text-base items-center"><FaCalendarAlt />{eventDate}</p>
                    </div>
                    <div>
                        <div className="card-actions justify-end flex items-center gap-4">
                            {
                                isLiked ?
                                    <button onClick={() => setIsLiked(false)}><FaHeart className="text-4xl text-red-500" /></button>
                                    :
                                    <button onClick={() => setIsLiked(true)}><FaHeart className="text-4xl" /></button>

                            }
                            <button onClick={() => handleJoinEvent(event)} className="btn btn-neutral">Join Event</button>
                        </div>
                    </div>
                </div>
            </div>
            <Comments eventId={_id} />
        </div>
    );
};

export default Event;