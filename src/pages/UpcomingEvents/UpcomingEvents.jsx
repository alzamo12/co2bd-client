import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import UpcomingEvent from "../../components/UpcomingEvents/UpcomingEvent";
import { useState } from "react";
import Pagination from "../../components/UpcomingEvents/Pagination";
const UpcomingEvents = () => {
    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);
    // console.log(page)
    const limit = 5;
    const { data: eventsData, isPending } = useQuery({
        queryKey: ["upcomingEvent", search, filter, page, limit],
        queryFn: async () => {
            const date = new Date().toLocaleDateString();
            const { data } = await axiosPublic.get(`/events?queryDate=${date}&title=${search}&filter=${filter}&page=${page}&limit=${limit}`);
            // const { data } = await axiosPublic.get(`/events?page=${page}&limit=${limit}`);
            // console.log(data, search)
            return data
        },
        keepPreviousData: true,
        onSuccess: (data) => {
            if (data.currentPage !== page) {
                setPage(data.currentPage);
            }
        }
    });

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

    if (isPending) return <LoadingSpinner />
    const { events: upcomingEvents, eventsCount = 0 } = eventsData;

    const totalPages = Math.ceil(Number(eventsCount) / limit);

    const handlePage = (page) => {
        setPage(page)
    }

    return (
        <div className="mx-3 md:mx-auto space-y-8 md:space-y-16 my-16">
            <h2 className="card-title mt-0 text-2xl md:text-3xl justify-center">Upcoming Events Page</h2>
            <div className="flex flex-col md:flex-row gap-3 md:gap-12">
                {/* search form */}
                <form className="flex w-full md:w-1/2 " onSubmit={handleSearch} action="">
                    <input name="search" type="text" placeholder="Type here" className="input rounded-r-none focus:border-none" />
                    <input type="submit" value="Search" className="btn btn-primary rounded-l-none" />
                </form>

                {/* filter */}
                <form className="flex w-full md:w-1/3" onSubmit={handleFilter} action="">
                    <select name="type" defaultValue="Pick a Type" className="select rounded-r-none focus:border-none w-1/2">
                        <option >All</option>
                        <option>Clean Up</option>
                        <option>Tree Plantation</option>
                        <option>Donation</option>
                    </select>
                    <input type="submit" value="Filter" className="btn btn-primary rounded-l-none" />

                </form>
            </div>

            {/* event */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
                {isPending ? <LoadingSpinner /> :
                    upcomingEvents?.map(event => <UpcomingEvent key={event._id} event={event} />)
                }
            </div>
            {/* <Pagination
                totalPages={totalPages}
                onPageChange={handlePage}
                siblingCount={1}
                boundaryCount={1}
            /> */}
            <div className="join grid grid-cols-3 w-xl">
                <button
                    onClick={() => handlePage(page - 1)}
                    disabled={page <= 1}
                    className="join-item btn btn-primary text-white">Previous page</button>
                <span className="text-center my-auto">Page {page} of {totalPages}</span>
                <button
                    onClick={() => handlePage(page + 1)}
                    disabled={page >= totalPages}
                    className="join-item btn btn-primary text-white">Next</button>
            </div>
        </div >
    );
};

export default UpcomingEvents;