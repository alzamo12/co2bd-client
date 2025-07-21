import {  useState } from "react";
import CreateEventForm from "./CreateEventForm";
import useAuth from "../../hooks/useAuth"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import Swal from "sweetalert2";
import { data, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import StepWizard from "react-step-wizard";
import CreatePayment from "./CreatePayment";

const CreateEvent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [wizardInstance, setWizardInstance] = useState(null);
    const form = useForm({
        defaultValues: {
            type: "Clean Up"
        }
    });

    const onSubmit = async (data) => {
        if (!selectedDate) {
            return toast.error("Please Select a date first")
        }
        const eventData = {
            ...data,
            eventDate: selectedDate.toLocaleDateString(),
            name: user.displayName,
            email: user.email
        };

        console.log(eventData)
        // post event data to database
        try {
            // const { data } = await axiosSecure.post("/event", eventData);
            // if (data.insertedId) {
            //     Swal.fire({
            //         title: "Event Added Successfully!",
            //         icon: "success",
            //         draggable: true
            //     });
            //     navigate("/upcoming-events")
            // }
            wizardInstance?.nextStep(); // Go to the next step

        }
        catch (error) {
            console.log("post api  event error", error)
        }
    }
    return (
        <div className="mt-10 w-3/4 md:w-full mx-auto">
            <div className="md:mx-auto md:w-xl border-l-0 border-r-0 border-2 border-green-400  border-dashed py-4">
                <h2 className="card-title justify-center text-2xl md:text-4xl">Create Your Own Event</h2>
            </div>

            {/* create event form */}
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} action="">
                    <StepWizard instance={wizard => setWizardInstance(wizard)}>
                        <CreateEventForm selectedDate={selectedDate} setSelectedDate={setSelectedDate} onSubmit={onSubmit} />
                        <CreatePayment wizard={wizardInstance} />
                    </StepWizard>
                </form>
            </FormProvider>
        </div>
    );
};

export default CreateEvent;