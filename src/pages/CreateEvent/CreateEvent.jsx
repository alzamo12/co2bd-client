import { useState } from "react";
import CreateEventForm from "./CreateEventForm";

const CreateEvent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const onSubmit = (data) => {
        const newData = { ...data, eventDate: selectedDate.toLocaleDateString() };
        console.log(newData)
    }
    return (
        <div className="mt-10 w-3/4 md:w-full mx-auto">
            <div className="md:mx-auto md:w-xl border-l-0 border-r-0 border-2 border-green-400  border-dashed py-4">
                <h2 className="card-title justify-center text-2xl md:text-4xl">Create Your Own Event</h2>
                {/* <div className="divider w-full before:bg-green-400 after:bg-green-400"></div> */}
            </div>

            {/* create event form */}
            <CreateEventForm selectedDate={selectedDate} setSelectedDate={setSelectedDate} onSubmit={onSubmit} />
        </div>
    );
};

export default CreateEvent;