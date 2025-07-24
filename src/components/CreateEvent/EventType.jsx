import React from 'react';

const EventType = ({register}) => {
    return (
        <fieldset className="fieldset ">
            <legend className="fieldset-legend py-0 mb-1">Event Type</legend>
            <select {...register("type", {required: true})} defaultValue="Pick a browser" className="select w-full input">
                {/* <option disabled={true}>Pick a browser</option> */}
                <option>Clean Up</option>
                <option>Tree Plantation</option>
                <option>Donation</option>
                <option>Assembly</option>
            </select>
        </fieldset>
    );
};

export default EventType;