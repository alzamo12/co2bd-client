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

const Featured = () => {
    return (
        <div className="mt-10 md:mt-20 space-y-5">
            <h2 className="text-2xl lg:text-4xl font-medium text-center lg:leading-12">Our Featuring Commitment <br />
                <span className="text-emerald-700">to Sustainable Development</span>
            </h2>
            <div className="container lg:max-w-screen-xl px-3 md:mx-auto md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* item --> 1 */}
                <label className="swap swap-flip w-full md:w-52  lg:w-52 xl:w-72 text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    <div className=" swap-on  lg:h-72  md:w-full bg-emerald-300 rounded-2xl md:px-3 lg:md:px-2 lg:px-5 ">
                        <div className="avatar hidden lg:block py-5 ">
                            <div className="w-20   rounded">
                                <img className="hi" src={img1} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">No Poverty</h2>
                                <p className="text-xs lg:leading-5">End Proverty in all its forms everywhere</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full">
                        <figure>
                            <img
                                className="w-full"
                                src={img1}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 2 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />
                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img2} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Zero Hunger</h2>
                                <p className="text-xs lg:leading-5">End hunger, achieve food security and improved nutrition and promote sustainable agriculture</p>
                            </div>
                        </div>
                    </div>
                    {/* swap off initial card */}
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img2}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 3 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img3} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Good Health and Well-being</h2>
                                <p className="text-xs lg:text-base lg:leading-5">Ensure healthy lives and promote well-being for all at all ages</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img3}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 4 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img4} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Quality Education</h2>
                                <p className=" text-xs lg:text-base lg:leading-5">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img4}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 5 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img5} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Gender Equality</h2>
                                <p className=" text-xs lg:text-base lg:leading-5">Achieve gender equality and empower all women and girls</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img5}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 6 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img6} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Clean Water and Sanitation</h2>
                                <p className=" text-xs lg:text-base lg:leading-5">Ensure availability and sustainable management of water and sanitation for all
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img6}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 7 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img7} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Decent Work and Economic Growth</h2>
                                <p className=" text-xs lg:text-base lg:leading-5">Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img7}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 8 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img8} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Industry, Innovation and Infrastructure</h2>
                                <p className=" text-xs lg:text-base lg:leading-5">Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img8}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 9 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img9} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Reduced Inequalities</h2>
                                <p className=" text-xs lg:text-base lg:leading-5">Reduce inequality within and among countries</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img9}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 10 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img10} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Climate Action</h2>
                                <p className=" text-xs lg:text-base lg:leading-5">Ensure healthy lives and promote well-being for all at all ages</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img10}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>
                {/* item --> 11 */}
                <label className="swap swap-flipw-full md:w-52  lg:w-52 xl:w-72  text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* swap on details */}
                    <div className=" swap-on  lg:h-72      md:w-full bg-emerald-300 rounded-2xl md:px-2 lg:px-5">
                        <div className="avatar hidden lg:block  py-5">
                            <div className="w-20 hidden lg:block   rounded">
                                <img className="hidden lg:block" src={img11} />
                            </div>
                        </div>
                        <div className="card card-border border-none w-full">
                            <div className=" card-body px-2 py-4 lg:py-0  ">
                                <h2 className="card-title hidden lg:block">Life Below Water</h2>
                                <p className=" text-xs lg:text-base lg:leading-5">Conserve and sustainably use the oceans, seas and marine resources for sustainable development</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 swap-off md:h-full w-38 md:md:w-full  ">
                        <figure>
                            <img
                                className="w-full"
                                src={img11}
                                alt="Shoes" />
                        </figure>
                    </div>
                </label>

            </div>
        </div>
    );
};

export default Featured;