import { useForm } from 'react-hook-form';
import CreateEventDate from '../../components/CreateEvent/CreateEventDate';
import CreateEventInput from '../../components/CreateEvent/CreateEventInput';
import CreateEventTextArea from '../../components/CreateEvent/CreateEventTextArea';
import EventType from '../../components/CreateEvent/EventType';

const CreateEventForm = ({ onSubmit, selectedDate, setSelectedDate}) => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm({
        defaultValues: {
            type: "Clean Up"
        }
    });
    return (
        <div className=" mb-0 md:w-2/3 md:mx-auto lg:mx-0 lg:w-full mt-10">
            <form fieldset onSubmit={handleSubmit(onSubmit)} className="fieldset md:w-full items-center font-medium grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-5">
                <CreateEventInput register={register} type="Title" />
                <CreateEventInput register={register} type="Image URL" />
                <CreateEventInput register={register} type="Location" />
                <CreateEventTextArea register={register} type="Description" />
                <EventType register={register} />
                <CreateEventDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} register={register} />
                <input type='submit' value='Create Event' className="btn w-60  mt-4 bg-green-500 text-white border-none hover:bg-green-600" />
            </form>
        </div>
    );
};

export default CreateEventForm;