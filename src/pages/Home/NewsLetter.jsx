import React from 'react';

const NewsLetter = () => {
    return (
        <div className='mt-10 lg:mt-14 px-2 md:px-0'>
            <div className="divider before:bg-green-300 after:bg-green-300"></div>
            <div className='md:w-2xl mx-auto px-2 mdLpx-0'>
                <div className="card-body items-center text-center edu-font">
                    <h2 className="card-title text-2xl flex" >Knowledge Newsletter from <span>CO<sub>2</sub>BD</span></h2>
                    <p>Hear from our seasoned event experts when you subscribe to the Stova newsletter. Access our eBooks and guides, industry trends, and latest product updates.</p>
                </div>
                <fieldset className="fieldset mx-auto ">
                    <legend className="fieldset-legend text-base">Business Email*</legend>
                    <input type="text" className="input w-full" placeholder="Business email" />
                    <button className='btn btn-primary text-white font-bold w-32 mx-auto'>Submit</button>
                </fieldset>
            </div>
            <div className="divider before:bg-green-300 after:bg-green-300"></div>
        </div>
    );
};

export default NewsLetter;