import React from 'react';

const CreateEventTextArea = ({type, register}) => {
    return (
        <div>
            <label className="label w-full mb-1 grid lg:col-span-3">{type}</label>
            <textarea {...register("description", {required: true})} placeholder={type} className="textarea textarea-sm grid w-full"></textarea>
        </div>
    );
};

export default CreateEventTextArea;