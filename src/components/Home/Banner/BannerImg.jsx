import bannerImage from "../../../assets/banner.webp"

const BannerImg = () => {
    return (
        <img
            src={bannerImage}
            className="w-full md:w-1/2 lg:w-full rounded-lg h-96"
        />
    );
};

export default BannerImg;