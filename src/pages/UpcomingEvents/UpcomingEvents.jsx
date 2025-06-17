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
        e.preventDefault()
        const text = e.target.search.value;
        setSearch(text);
        // console.log(text, search)
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

    // if (isPending) return <LoadingSpinner />

    return (
        <div className="max-w-screen-2xl mx-3 md:mx-auto lg:mt-16 space-y-8 md:space-y-10">
            <h2 className="card-title text-2xl md:text-5xl justify-center">Upcoming Events Page</h2>
            <div className="flex flex-col md:flex-row gap-3 md:gap-12">
                {/* search form */}
                <form className="flex w-full md:w-1/2" onSubmit={handleSearch} action="">
                    <input name="search" type="text" placeholder="Type here" className="input rounded-r-none focus:border-none" />
                    <input type="submit" value="Search" className="btn btn-neutral rounded-l-none" />
                </form>

                {/* filter */}
                <form className="flex w-full md:w-1/3" onSubmit={handleFilter} action="">
                    <select name="type" defaultValue="Pick a Type" className="select rounded-r-none focus:border-none w-1/2">
                        <option >All</option>
                        <option>Clean Up</option>
                        <option>Tree Plantation</option>
                        <option>Donation</option>
                    </select>
                    <input type="submit" value="Filter" className="btn btn-neutral rounded-l-none" />

                </form>
            </div>

            {/* event */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
                {isPending ? <LoadingSpinner /> :
                    upcomingEvents?.map(event => <UpcomingEvent event={event} />)
                }
            </div>
        </div >
    );
};

export default UpcomingEvents;