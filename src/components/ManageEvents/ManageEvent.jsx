import { Link } from 'react-router';

const ManageEvent = ({ event }) => {
    const { _id, image, title, type, eventDate, location } = event;
    return (
        <div className="card bg-base-100 w-80 shadow-sm px-5">
            <figure className=" pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body px-0 w-full">
                <h2 className="card-title text-xl">{title}</h2>
                <h2 className="card-title text-base">{type}</h2>
                <p>{location}</p>
                <p>{eventDate}</p>
                <div className="card-actions flex w-full justify-end">
                    <Link to={`/update-event/${_id}`} className='btn btn-neutral'>View Event</Link>
                </div>
            </div>
        </div>
    );
};

export default ManageEvent;