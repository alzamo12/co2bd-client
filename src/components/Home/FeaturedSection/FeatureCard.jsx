import React from 'react';

const FeatureCard = ({ sdgCard }) => {
    const { img, title, description } = sdgCard
    return (
        <label className="swap swap-flip p-0 w-full md:w-full lg:h-64 xl:h-auto lg:w-full xl:w-full text-9xl">
            <input type="checkbox" />

            <div className="swap-on lg:h-64 xl:h-auto xl:w-full md:w-full bg-emerald-300 rounded-2xl md:px-3 lg:md:px-2 lg:px-5 ">
                <div className="avatar hidden lg:block py-5 ">
                    <div className="w-20   rounded">
                        <img className="hi" src={img} />
                    </div>
                </div>
                <div className="card card-border border-none w-full">
                    <div className=" card-body px-2 py-4 lg:py-0  ">
                        <h2 className="card-title hidden lg:block">{title}</h2>
                        <p className="text-xs lg:leading-5">{description}</p>
                    </div>
                </div>
            </div>
            <div className="lg:card p-0 bg-base-100 swap-off md:h-full w-full md:w-full lg:h-full">
                <figure>
                    <img
                        className="w-full my-auto lg:h-full"
                        src={img}
                        alt="Shoes" />
                </figure>
            </div>
        </label>
    );
};

export default FeatureCard;