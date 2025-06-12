import BannerImg from "../../components/Home/Banner/BannerImg";
import BannerInfo from "../../components/Home/Banner/BannerInfo";

const Banner = () => {
    return (
        <div className="hero w-full mt-8 rounded-xl md:rounded-3xl lg:py-10 bg-orange-300 edu-font">
            <div className="hero-content flex-col-reverse md:flex-row-reverse gap-12 md:gap-0">
                <BannerImg />
                <BannerInfo />
            </div>
        </div>
    );
};

export default Banner;