import { BiCategory } from 'react-icons/bi';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const ManageEvent = ({ event }) => {
    const { _id, image, title, type, eventDate, location } = event;
    return (
        <div className="card bg-base-100 md:w-full lg:w-full shadow-sm px-5  dark:shadow-white">
            <figure className=" pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full md:h-48 lg:h-96" />
            </figure>
            <div className="card-body w-full">
                <h2 className="card-title text-xl md:text-2xl flex gap-2 items-center">{title}</h2>
                <h2 className="card-title text-lg flex gap-2 items-center"><BiCategory />{type}</h2>
                <p className="flex gap-2 text-base items-center"><FaMapMarkerAlt />{location}</p>
                <p className="flex gap-2 text-base items-center"><FaCalendarAlt />{eventDate}</p>
              <div className="card-actions flex w-full justify-end">
                    <Link to={`/update-event/${_id}`} className='btn bg-green-500 text-white'>Update Event</Link>
                </div>
            </div>
        
        </div>
    );
};

export default ManageEvent;