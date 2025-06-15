import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import UpcomingEvent from "../../components/UpcomingEvents/UpcomingEvent";
import { useState } from "react";
const UpcomingEvents = () => {
    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState("");

    const { data: upcomingEvents, isPending } = useQuery({
        queryKey: ["upcomingEvent", search],
        queryFn: async () => {
            const date = new Date().toLocaleDateString();
            const { data } = await axiosPublic.get(`/events?queryDate=${date}&title=${search}`);
            // console.log(data)
            return data
        }
    })

    const handleSearch = e => {
        const text = e.target.search.value;
        setSearch(text);
        console.log(text, search)
    }

    if (isPending) return <LoadingSpinner />

    return (
        <div className="max-w-screen-2xl mx-auto lg:mt-16 md:space-y-10">
            <h2 className="card-title text-5xl justify-center">Upcoming Events Page</h2>
            <form onSubmit={handleSearch} action="">
                <input name="search" type="text" placeholder="Type here" className="input" />
                <input type="submit" value="Search" className="btn btn-neutral" />
            </form>
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