import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const CreateEventDate = ({selectedDate, setSelectedDate}) => {
    return (
        <div className="col-span-1">
            <label className="label w-full mb-1">Select Your Event Date</label>
            <div className="input w-full ">
                <DatePicker
                    className="w-full"
                    dateFormat="yyyy/MM/dd"
                    selected={selectedDate}
                    // startDate={selectedDate}
                    minDate={new Date()}
                    onChange={(date) => setSelectedDate(date)}
                />
            </div>
        </div>
    );
};

export default CreateEventDate;