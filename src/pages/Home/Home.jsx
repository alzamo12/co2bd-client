import Banner from './Banner';
import Featured from "./Featured"
import Gallery from './Gallery';
import NewsLetter from "./NewsLetter"
const Home = () => {
    return (
        <div className='w-full space-y-16 lg:my-16'>
            <div className=" md:mx-0 w-full">
                <Banner />
            </div>
            <div>
                <Featured />
            </div>
            <div className=''>
                <Gallery />
            </div>
            <div>
                <NewsLetter />
            </div>
        </div>
    );
};

export default Home;