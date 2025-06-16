import React from 'react';

const BannerInfo = () => {
    return (
        <div className='md:w-1/2 lg:w-full'>
            <h1 className="text-3xl  md:text-3xl lg:text-5xl font-bold text-black leading-10 md:leading-10 lg:leading-16">EVENTS IMAGINED <br />
                <span className="text-green-700 dark:text-black">BRANDS ELEVATED</span>
            </h1>
            <p className="py-6">
                CO<sub>2</sub>BD is the definitive event technology ecosystem with end-to-end solutions designed to flex
                for any event no matter the size or location. Our event management solutions have the power
                and flexibility global enterprises need, and the scalability that event organizers love.
            </p>
            <button className="btn btn-primary">Get Started</button>
        </div>
    );
};

export default BannerInfo;