import banner from "../../assets/banner.webp"
const Banner = () => {
    return (
        <div className="hero w-full mt-8 rounded-xl md:rounded-3xl lg:py-10 bg-orange-300 edu-font">
            <div className="hero-content flex-col-reverse md:flex-row-reverse gap-12 md:gap-0">
                <img
                    src={banner}
                    className="w-full md:w-1/2 lg:w-full rounded-lg h-96"
                />
                <div className='md:w-1/2 lg:w-full'>
                    <h1 className="text-3xl  md:text-3xl lg:text-5xl font-bold text-black leading-10 md:leading-10 lg:leading-16">EVENTS IMAGINED <br />
                        <span className="text-orange-600">BRANDS ELEVATED</span>
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;