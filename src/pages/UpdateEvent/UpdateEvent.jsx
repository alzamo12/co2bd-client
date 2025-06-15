import { useLoaderData } from "react-router";
import UpdateEventForm from "../../components/UpdateEvent/UpdateEventForm";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const UpdateEvent = () => {
    const event = useLoaderData();
    const { user } = useAuth();
    const { eventDate, _id } = event;
    const [selectedDate, setSelectedDate] = useState(eventDate);
    const axiosSecure = useAxiosSecure();
    console.log(event)

    const { mutateAsync } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosSecure.put(`/event/${_id}`, data)
            return res.data
        },
        onSuccess: (data) => {
            console.log(data)
            if (data.modifiedCount > 0) {
                toast.success("File updated successfully")
            }
            else {
                toast("Nothing updated")
            }
        },
        onError: (error) => {
            console.log(error)
            toast.error("file did not update")
        }
    })

    const onSubmit = async (data) => {
        if (user.email === event.email) {
            const eventData = {
                ...data,
                eventDate: selectedDate
            }
            console.log(eventData)
            await mutateAsync(data)
        }
        else {
            toast.error("You can not get access of this event")
        }
    };

    return (
        <div className="mt-10 w-3/4 md:w-full mx-auto">
            <div className="md:mx-auto md:w-xl border-l-0 border-r-0 border-2 border-green-400  border-dashed py-4">
                <h2 className="card-title justify-center text-2xl md:text-4xl">Update Your Event</h2>
                {/* <div className="divider w-full before:bg-green-400 after:bg-green-400"></div> */}
            </div>

            {/* create event form */}
            <UpdateEventForm selectedDate={selectedDate} setSelectedDate={setSelectedDate} event={event} onSubmit={onSubmit} />
        </div>
    );
};

export default UpdateEvent;