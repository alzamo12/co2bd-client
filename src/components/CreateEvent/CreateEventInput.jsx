
const CreateEventInput = ({ type, register, rules }) => {
    let typeLowerText = type.toLowerCase();
    if (typeLowerText.includes(" ")) {
        typeLowerText = typeLowerText.split(" ")[0];
    }
    return (
        <div className="">
            <label className="label w-full mb-1">{type}</label>
            <input {...register(typeLowerText, {
                required: true,
                ...rules
            })} name={typeLowerText} type="text" className="input font-bold w-full focus:bg-transparent" placeholder={type} />

        </div>
    );
};

export default CreateEventInput;