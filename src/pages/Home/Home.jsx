import Banner from './Banner';
import Featured from "./Featured"
import Gallery from './Gallery';
import NewsLetter from "./NewsLetter"
const Home = () => {
    return (
        <div>
            <div className="mx-2 md:mx-auto">
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