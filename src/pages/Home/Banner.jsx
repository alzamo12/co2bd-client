import BannerImg from "../../components/Home/Banner/BannerImg";
import BannerInfo from "../../components/Home/Banner/BannerInfo";

const Banner = () => {
    return (
        <div className="hero w-full mt-8 rounded-xl md:rounded-3xl lg:py-10 bg-green-300 edu-font md:relative md:left-1/2 md:w-screen md:-translate-x-1/2">
            <div className="hero-content flex-col-reverse md:flex-row-reverse gap-12 ">
                <BannerImg />
                <BannerInfo />
            </div>
        </div>
    );
};

export default Banner;