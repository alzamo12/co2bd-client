import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import usePrivateRouteNavigation from "../../hooks/usePrivateRouteNavigation";
import SocialLogin from "../../components/shared/SocialLogin/SocialLogin";

const Login = () => {
    const { signIn } = useAuth();
    const emailRef = useRef("email@gmail.com");
    // const errorMsg = useCustomErrorToast();
    const { from, navigate } = usePrivateRouteNavigation();
    // const navigate = useNavigate();
    // const location = useLocation();
    // let from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault()
        const data = e.target;
        const email = data.email.value
        const password = data.password.value;
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "You Have Login Successfully",
                    icon: "success"
                })
                navigate(from, { replace: true })
            })
            .catch(error => {

                const newError = error?.message.replace("Firebase:", "");
                toast.error(`Oppss! Login failed: ${newError}`)
                console.log(error)
            })
    };
    return (
        <div>
            <ToastContainer />
            <div className="hero min-h-screen auth-login">
                <div className="hero-content 2xl:px-20 md:shadow-2xl border-orange-400 md:border-2 rounded-3xl md:mx-0
                h-5/6 lg:max-w-[55%] w-screen md:w-3/4 lg:w-[55%] 2xl:w-[75%] gap-[10%] flex-col md:flex-row">

                    <div className="card w-full lg:w-2/3">
                        <div>
                        </div>
                        <div className="card-body w-full inter mb-0 mt-0 text-xl font-semibold">
                            {/* email */}
                            <form onSubmit={handleLogin} className="card-body  mb-0 md:w-2/3 md:mx-auto lg:mx-0 lg:w-full">
                                <h2 className="text-4xl inter font-bold md:text-left lg:text-center">Login</h2>
                                <fieldset className="fieldset w-full items-center font-medium">
                                    <label className="label w-full">Email</label>
                                    <input ref={emailRef} name='email' type="email" className="input dark:text-white font-bold w-full focus:bg-transparent input-ghost border-black text-black" placeholder="Email" required />
                                    <label className="label w-full">Password</label>
                                    <input name='password' type="password" className="input dark:text-white font-bold focus:bg-transparent w-full input-ghost border-black text-black" placeholder="Password" required />
                                    <input type='submit' value='Login' className="btn w-1/3  mt-4 bg-orange-500 text-white border-none hover:bg-orange-600" />
                                    <button className='justify-self-start'><a className="link link-hover">Forgot password?</a></button>

                                </fieldset>
                            </form>
                            <SocialLogin
                            ></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;