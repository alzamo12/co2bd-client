import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import UpcomingEvent from "../../components/UpcomingEvents/UpcomingEvent";
import { useState } from "react";
const UpcomingEvents = () => {
    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const { data: upcomingEvents, isPending } = useQuery({
        queryKey: ["upcomingEvent", search, filter],
        queryFn: async () => {
            const date = new Date().toLocaleDateString();
            const { data } = await axiosPublic.get(`/events?queryDate=${date}&title=${search}&filter=${filter}`);
            // console.log(data)
            return data
        }
    })

    const handleSearch = e => {
        const text = e.target.search.value;
        setSearch(text);
        console.log(text, search)
    };

    const handleFilter = (e) => {
        e.preventDefault()
        const type = e.target.type.value;

        if (type === "All") {
            return setFilter("")
        }
        else {
            setFilter(type)
        }
        // console.log(type)
    }

    if (isPending) return <LoadingSpinner />

    return (
        <div className="max-w-screen-2xl mx-auto lg:mt-16 md:space-y-10">
            <h2 className="card-title text-5xl justify-center">Upcoming Events Page</h2>
            <form onSubmit={handleSearch} action="">
                <input name="search" type="text" placeholder="Type here" className="input" />
                <input type="submit" value="Search" className="btn btn-neutral" />
            </form>

            {/* filter */}
            <form onSubmit={handleFilter} action="">
                <select name="type" defaultValue="Pick a Type" className="select">
                    <option >All</option>
                    <option>Clean Up</option>
                    <option>Tree Plantation</option>
                    <option>Donation</option>
                </select>
                <input type="submit" value="Search" className="btn btn-neutral" />

            </form>

            {/* event */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
                {
                    upcomingEvents?.map(event => <UpcomingEvent event={event} />)
                }
            </div>
        </div >
    );
};

export default UpcomingEvents;