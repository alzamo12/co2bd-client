import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JoinedEvent = ({ event }) => {
    const { image, title, type, location, eventDate, _id } = event;
    return (
        <div className="card bg-base-100 shadow-sm dark:shadow-white">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full md:h-48 lg:h-96" />
            </figure>
            <div className="card-body px-12 w-full">
                <h2 className="card-title text-xl md:text-2xl flex gap-2 items-center">{title}</h2>
                <h2 className="card-title text-lg flex gap-2 items-center"><BiCategory />{type}</h2>
                <p className="flex gap-2 text-base items-center"><FaMapMarkerAlt />{location}</p>
                <p className="flex gap-2 text-base items-center"><FaCalendarAlt />{eventDate}</p>
            </div>
        </div>
    );
};

export default JoinedEvent;