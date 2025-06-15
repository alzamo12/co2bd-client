import { useLoaderData } from "react-router";
import UpdateEventForm from "../../components/UpdateEvent/UpdateEventForm";

const UpdateEvent = () => {
    const event = useLoaderData();
    console.log(event)
    const onSubmit = (data) => {

    };

    return (
        <div className="mt-10 w-3/4 md:w-full mx-auto">
            <div className="md:mx-auto md:w-xl border-l-0 border-r-0 border-2 border-green-400  border-dashed py-4">
                <h2 className="card-title justify-center text-2xl md:text-4xl">Create Your Own Event</h2>
                {/* <div className="divider w-full before:bg-green-400 after:bg-green-400"></div> */}
            </div>

            {/* create event form */}
            <UpdateEventForm  onSubmit={onSubmit} />
        </div>
    );
};

export default UpdateEvent;