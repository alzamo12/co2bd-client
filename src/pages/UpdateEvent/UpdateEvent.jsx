import { useParams } from "react-router";
import UpdateEventForm from "../../components/UpdateEvent/UpdateEventForm";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";

const UpdateEvent = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { id } = useParams();

    const { data: event, isLoading } = useQuery({
        queryKey: ["event", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/event/${id}`);
            return res.data
        }
    });

    // const { eventDate, _id } = event;
    const [selectedDate, setSelectedDate] = useState(event?.eventDate);
    useEffect(() => {
        if(event){
            setSelectedDate(event.eventDate)
        }
    }, [event])
    console.log(selectedDate)
    console.log(event)

    const { mutateAsync } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosSecure.put(`/event/${event?._id}`, data)
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

    if (isLoading) return <LoadingSpinner />

    const onSubmit = async (data) => {
        if (user.email === event.email) {
            const { _id, name, timeStamp,email, ...rest } = event;

            const eventData = {
                ...data,
                email: user.email,
                eventDate: selectedDate === event?.eventDate ? event?.eventDate : selectedDate.toLocaleDateString()
            };

            if (JSON.stringify(rest, Object.keys(rest).sort()) == JSON.stringify(eventData, Object.keys(eventData).sort())) {
                return toast.error("please change something and try again")
            }

            await mutateAsync(eventData)
        }
        else {
            toast.error("You can not get access of this event")
        }
    };

    return (
        <div className="mt-10 w-3/4 md:w-full mx-auto">
            <div className="md:mx-auto md:w-xl border-l-0 border-r-0 border-2 border-green-400  border-dashed py-4">
                <h2 className="card-title justify-center text-2xl md:text-4xl">Update Your Event</h2>
            </div>

            {/* create event form */}
            <UpdateEventForm selectedDate={selectedDate} setSelectedDate={setSelectedDate} event={event} onSubmit={onSubmit} />
        </div>
    );
};

export default UpdateEvent;