import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Event = () => {
    const params = useParams();
    const axiosSecure = useAxiosSecure();

    const {data:event} = useQuery({
        queryKey: ["event"],
        queryFn: async() => {
            const {data} = await axiosSecure.get(`/event/${params.id}`);
            return data
        }
    })


    return (
        <div>
            
        </div>
    );
};

export default Event;