import img1 from "../../assets/featured/card1.jpg"
import img2 from "../../assets/featured/card2.jpg"
import img3 from "../../assets/featured/card3.jpg"
import img4 from "../../assets/featured/card4.jpg"
import img5 from "../../assets/featured/card5.jpg"
import img6 from "../../assets/featured/card6.jpg"
import img7 from "../../assets/featured/card7.jpg"
import img8 from "../../assets/featured/card8.jpg"
import img9 from "../../assets/featured/card9.jpg"
import img10 from "../../assets/featured/card10.jpg"
import img11 from "../../assets/featured/card11.jpg"
import FeatureCard from "../../components/Home/FeaturedSection/FeatureCard"


const sdgCards = [
    {
        id: 1,
        title: "No Poverty",
        description: "End Proverty in all its forms everywhere",
        img: img1,
    },
    {
        id: 2,
        title: "Zero Hunger",
        description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
        img: img2,
    },
    {
        id: 3,
        title: "Good Health and Well-being",
        description: "Ensure healthy lives and promote well-being for all at all ages",
        img: img3,
    },
    {
        id: 4,
        title: "Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
        img: img4,
    },
    {
        id: 5,
        title: "Gender Equality",
        description: "Achieve gender equality and empower all women and girls",
        img: img5,
    },
    {
        id: 6,
        title: "Clean Water and Sanitation",
        description: "Ensure availability and sustainable management of water and sanitation for all",
        img: img6,
    },
    {
        id: 7,
        title: " Economic Growth",
        description: "Promote sustained, inclusive and sustainable economic growth.",
        img: img7,
    },
    {
        id: 8,
        title: "Industry, Innovation and Infrastructure",
        description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
        img: img8,
    },
    {
        id: 9,
        title: "Reduced Inequalities",
        description: "Reduce inequality within and among countries",
        img: img9,
    },
    {
        id: 10,
        title: "Climate Action",
        description: "Ensure healthy lives and promote well-being for all at all ages",
        img: img10,
    },
    {
        id: 11,
        title: "Life Below Water",
        description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
        img: img11,
    },
];


const Featured = () => {
    return (
        <div className=" space-y-5">
            <h2 className="text-2xl lg:text-4xl font-medium text-center lg:leading-12">Our Featuring Commitment <br />
                <span className="text-emerald-700">to Sustainable Development</span>
            </h2>
            <div className="w-full px-3 lg:px-0 mx-auto  md:mx-auto md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-12">
                {sdgCards.map(sdgCard => <FeatureCard key={sdgCard?.id} sdgCard={sdgCard} />)}
            </div>
        </div>
    );
};

export default Featured;