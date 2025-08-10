import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BiCategory } from "react-icons/bi";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";


const RecentEvents = () => {
    const axiosPublic = useAxiosPublic();
    const { data: events = [], isLoading, isError, isPending } = useQuery({
        queryKey: ["recentEvents"],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/events?limit=5");
            return data;
        }
    });

    if (isLoading || isPending) {
        return <LoadingSpinner />
    }

    return (
        <section className="my-0 px-4 md:px-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Recent Events</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {
                    events.length > 0 &&
                    events?.map(({ _id, image, title, type, location, eventDate }) => (
                        <div
                            key={_id}
                            className="card bg-base-100 shadow-sm dark:shadow-white md:w-full lg:w-full px-5"
                        >
                            <figure className="pt-10">
                                <img
                                    src={image}
                                    alt={title}
                                    className="rounded-xl w-full md:h-48 lg:h-96 object-cover"
                                />
                            </figure>
                            <div className="card-body w-full">
                                <h2 className="card-title text-xl md:text-2xl flex gap-2 items-center">
                                    {title}
                                </h2>
                                <h2 className="card-title text-lg flex gap-2 items-center">
                                    <BiCategory />
                                    {type}
                                </h2>
                                <p className="flex gap-2 text-base items-center">
                                    <FaMapMarkerAlt />
                                    {location}
                                </p>
                                <p className="flex gap-2 text-base items-center">
                                    <FaCalendarAlt />
                                    {eventDate}
                                </p>
                                <div className="card-actions flex w-full justify-end">
                                    <Link
                                        to={`/update-event/${_id}`}
                                        className="btn bg-green-500 text-white"
                                    >
                                        Update Event
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default RecentEvents;
