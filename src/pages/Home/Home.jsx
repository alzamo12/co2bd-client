import Banner from './Banner';
import Featured from "./Featured"
const Home = () => {
    return (
        <div>
            <div className="mx-2 md:mx-auto">
                <Banner />
            </div>
            <div>
                <Featured />
            </div>
        </div>
    );
};

export default Home;