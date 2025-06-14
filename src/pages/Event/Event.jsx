import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Event = () => {
    const params = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: event } = useQuery({
        queryKey: ["event"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/event/${params.id}`);
            return data
        }
    })

    const {image, title, description} = event;


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
                    <button className="btn btn-neutral">Join Event</button>
                </div>
            </div>
        </div>
    );
};

export default Event;