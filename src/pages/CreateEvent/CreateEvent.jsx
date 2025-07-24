import { useState } from "react";
import CreateEventForm from "./CreateEventForm";
import useAuth from "../../hooks/useAuth"
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import StepWizard from "react-step-wizard";
import CreatePayment from "./CreatePayment";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CreateEvent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [wizardInstance, setWizardInstance] = useState(null);
    const [collectedData, setCollectedData] = useState({});
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
        setCollectedData(eventData)
        console.log(eventData)
        // post event data to database
        try {
            wizardInstance?.nextStep(); // Go to the next step

        }
        catch (error) {
            console.log("post api  event error", error)
        }
    };


    const handlePaymentSuccess = async (paymentIntent) => {
        try {
            const eventData = {
                paymentId: paymentIntent?.id,
                paymentDate: new Date(),
                ...collectedData
            };
            const { data } = await axiosSecure.post("/event", eventData);
            if (data.insertedId) {
                Swal.fire({
                    title: "Event Added Successfully!",
                    icon: "success",
                    draggable: true
                });
                navigate("/upcoming-events")
            }

        }
        catch (error) {
            console.log("post api  event error", error)
            toast.error("Payment error has occurred")
        }
    }

    return (
        <div className="mt-10 w-3/4 md:w-full mx-auto">
            <div className="md:mx-auto md:w-xl border-l-0 border-r-0 border-2 border-green-400  border-dashed py-4">
                <h2 className="card-title justify-center text-2xl md:text-4xl">Create Your Own Event</h2>
            </div>

            {/* create event form */}
            <FormProvider {...form}>
                {/* <form onSubmit={form.handleSubmit(onSubmit)} action=""> */}
                <StepWizard
                    instance={wizard => setWizardInstance(wizard)}
                    unmountInactiveSteps={false}>
                    <CreateEventForm selectedDate={selectedDate} setSelectedDate={setSelectedDate} onSubmit={onSubmit} />
                    <CreatePayment
                        // clientSecret={clientSecret}
                        // onBack={() => wizardInstance.previousStep()}
                        onSuccess={handlePaymentSuccess}
                        wizard={wizardInstance} />
                </StepWizard>
                {/* </form> */}
            </FormProvider>
        </div>
    );
};

export default CreateEvent;