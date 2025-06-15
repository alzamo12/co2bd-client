import React from 'react';
import { Link } from 'react-router';

const UpcomingEvent = ({ event }) => {

    const { _id, image, title, location, type, eventDate } = event;
    return (
        <div className="card bg-base-100 shadow-sm w-full">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-80" />
            </figure>
            <div className="card-body px-12 w-full">
                <h2 className="card-title text-xl">{title}</h2>
                <h2 className="card-title text-base">{type}</h2>
                <p>{location}</p>
                <p>{eventDate}</p>
                <div className="card-actions flex w-full justify-end">
                    <Link to={`/event/${_id}`} className='btn btn-neutral'>View Event</Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;