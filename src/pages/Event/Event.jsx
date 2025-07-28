import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Comments from "../../components/Event/Comments";
import { FaHeart } from "react-icons/fa";

const Event = () => {
    const params = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // const [isLiked, setIsLiked] = useState(false)
    const queryClient = useQueryClient();

    const { data: event, isPending } = useQuery({
        queryKey: ["event"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/event/${params.id}`);
            return data
        }
    });
    const eventId = event?._id;
    const userEmail = user?.email
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
    });

    const { data: like } = useQuery({
        queryKey: ['like', eventId, userEmail],
        queryFn: async () => {
            const res = await axiosSecure.get(`/like?targetId=${eventId}&userEmail=${userEmail}`);
            console.log(res)
            return res.data
        }
    })

    const { mutateAsync: likeAsync, isPending: likePending } = useMutation({
        mutationFn: async (likeData) => {
            const res = await axiosSecure.post(`/likes`, likeData);
            return res.data
        },
        onSuccess: async (data) => {
            toast.success("you have liked Successfully")
            queryClient.invalidateQueries(['like'])
            console.log(data)
        }
    });

    const { data: eventLikeCount } = useQuery({
        queryKey: ['eventLikeCount', eventId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/eventLikeCount/${eventId}`)
            console.log("event like count", res.data)
            return res.data
        }
    });

    const { mutateAsync: deleteLike } = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.delete(`/like/${id}`);
            return res.data
        },
        onSuccess: (data) => {
            toast.success("like removed successfully")
            queryClient.invalidateQueries(['like'])
            console.log(data)
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
    };

    const handleLike = async () => {
        const likeData = {
            target_id: event?._id,
            target_type: 'event',
            user_email: user?.email,
        };
        likeAsync(likeData)
    };

    const handleDeleteLike = async (id) => {
        deleteLike(id)
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
                                likePending ?
                                    <button><FaHeart className="text-4xl" /></button>
                                    :
                                    like ?
                                        <div>
                                            <button onClick={() => handleDeleteLike(like?._id)}><FaHeart className="text-4xl text-red-500" /></button>
                                            <span>{eventLikeCount}</span>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={() => handleLike()}><FaHeart className="text-4xl" /></button>
                                            <span>{eventLikeCount}</span>
                                        </div>

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