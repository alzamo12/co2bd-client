import BannerImg from "../../components/Home/Banner/BannerImg";
import BannerInfo from "../../components/Home/Banner/BannerInfo";

const Banner = () => {
    return (
        <div className="hero w-full rounded-xl lg:rounded-none md:py-10 bg-green-300 dark:bg-green-700 dark:text-black edu-font md:relative md:left-1/2 md:w-screen md:-translate-x-1/2">
            <div className="w-11/12 flex flex-col-reverse md:flex-row-reverse justify-between ">
                <BannerImg />
                <BannerInfo />
            </div>
        </div>
    );
};

export default Banner;