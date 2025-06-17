import { BiCategory } from "react-icons/bi";
import { Link } from 'react-router';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const UpcomingEvent = ({ event }) => {

    const { _id, image, title, location, type, eventDate } = event;
    return (
        <div className="card bg-base-100 shadow-sm dark:shadow-white w-full">
            <figure className="px-10 pt-10 ">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full md:h-48 lg:h-96 " />
            </figure>
            <div className="card-body px-12 w-full">
                <h2 className="card-title text-xl md:text-2xl flex gap-2 items-center">{title}</h2>
                <h2 className="card-title text-lg flex gap-2 items-center"><BiCategory />{type}</h2>
                <p className="flex gap-2 text-base items-center"><FaMapMarkerAlt />{location}</p>
                <p className="flex gap-2 text-base items-center"><FaCalendarAlt />{eventDate}</p>
                <div className="card-actions flex w-full justify-end">
                    <Link to={`/event/${_id}`} className='btn bg-green-500 hover:bg-green-600 text-white'>View Event</Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;