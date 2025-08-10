import logo from "../../../assets/healthy.png"

const Footer = () => {
    return (
        <footer  className="bg-accent">
            <div className={`  text-gray-100 footer mt-8 flex justify-between w-11/12 mx-auto`}>
                <aside className="w-full h-full md:flex-1 py-4 md:py-20   inter font-medium">
                    <h2 className="md:text-3xl  uppercase md:mb-4">Contact us</h2>
                    <div className="text-[8px] md:text-lg md:text-left md:space-y-2">
                        <p> 22/22, Khilji Road, Mohammadpur, </p>
                        <p>Dhaka - 1207 </p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </aside>
                {/* <div className="divider before:bg-white after:bg-white"></div> */}
                <nav className={`w-full h-full flex-1 py-4 md:py-32 justify-end font-medium inter`} >
                    <h2 className="text-xl md:text-2xl">Follow Us</h2>
                    <h6 className="footer-title text-[10px] md:text-lg ">Join us on social media</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://x.com/alzami12_" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@letsdoit9278" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/al.zami.583" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
            <div className=" footer-center relative w-[100vw] left-1/2 right-1/2 -mx-[50vw] bg-base-300 text-base-content text-xs md:text-base p-4">
                <p className="w-11/12 mx-auto"><span className='font-bold'>Terms & Conditions</span>: By creating an account, booking an Event, or otherwise using our Services, you confirm that you have read, understood, and agree to these Terms & Conditions and our Privacy Policy.</p>
            </div>
        </footer>
    );
};

export default Footer;