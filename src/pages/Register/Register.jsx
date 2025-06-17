import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../../components/shared/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import usePrivateRouteNavigation from '../../hooks/usePrivateRouteNavigation';
import { useEffect } from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/shared/Navbar/Navbar';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { createUser, updateUserProfile, user } = useAuth();
    const { navigate, from } = usePrivateRouteNavigation();

    const onSubmit = (data) => {
        // console.log('This is initial registered form data', data)

        createUser(data.email, data.password)
            .then(() => {
                // set name and photo url
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // success alert after successfully login
                        Swal.fire({
                            title: "Good job!",
                            text: "You Have Sign up Successfully",
                            icon: "success"
                        })
                        // navigate user
                        navigate('/', { replace: true })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
                // split the error
                const newError = error.message.replace("Firebase:", "");
                // show the splitted error using react-toastify
                toast.error(`Oppss! Please try again: ${newError}`, { autoClose: 1500 })
            })
    }

    useEffect(() => {
        switch (errors.password?.type) {
            case "minLength":
                toast.error("Error: Password must be at least 6 characters", { autoClose: 1500 });
                break;
            case "pattern":
                toast.error("Error: Password must have an uppercase and a lowercase letter", { autoClose: 1500 });
                break;
        }
        switch (errors.email?.type) {
            case "pattern":
                toast.error("Error: Invalid Email", { autoClose: 1500 });
                break;
        }
        switch (errors.photo?.type) {
            case "pattern":
                toast.error("invalid Photo URL")
                break
        }
    }, [errors.password?.type, errors.email?.type, errors.photo?.type]);

    if (user) navigate("/")

    return (
        <div>
            <ToastContainer />
            <Navbar />
            <title>CO2BD | Sign Up</title>
            <div className="hero min-h-screen auth-login">
                <div className="hero-content 2xl:px-20 md:shadow-2xl border-green-300 md:border-2 rounded-3xl md:mx-0
                 h-5/6 py-0 lg:max-w-[55%] w-screen md:w-3/4 lg:w-[55%] 2xl:w-[75%] gap-[10%] flex-col md:flex-row">
                    <div className="card w-full lg:w-2/3">
                        <div>
                        </div>
                        <div className="card-body w-full inter mb-0 mt-0 text-xl font-semibold">
                            {/* Register Form  */}
                            <div onSubmit={handleSubmit(onSubmit)} className="card-body  mb-0 md:w-2/3 md:mx-auto lg:mx-0 lg:w-full">
                                <h2 className="text-4xl inter font-bold md:text-left lg:text-center">Sign Up</h2>
                                {/* input fields */}
                                <form className="fieldset w-full items-center font-medium">
                                    {/* Name */}
                                    <label className="label w-full">Your Name</label>
                                    <input {...register("name", {
                                        required: true,
                                    })}
                                        type="text"
                                        className="input font-bold w-full  focus:bg-transparent "
                                        placeholder="Your Name"
                                        required />
                                    {/* email */}
                                    <label className="label w-full">Email</label>
                                    <input {...register("email", {
                                        required: true,
                                        pattern: /^[^\s@]+@[^\s/@]+\.[^\s@]+$/
                                    })}
                                        type="email"
                                        className="input font-bold w-full  focus:bg-transparent 
                                             "
                                        placeholder="Email"
                                        required />
                                    {/* photo url */}
                                    <label className="label w-full">Photo URL</label>
                                    <input {...register("photo",
                                        {
                                            required: true,
                                            pattern: /^https?:\/\/.+\.(jpg|jpeg|png|gif|svg|webp)$/i
                                        })}
                                        type="text"
                                        className="input font-bold w-full  
                                             focus:bg-transparent "
                                        placeholder="Photo URL"
                                        required />
                                    {/* password */}
                                    <label className="label w-full">Password</label>
                                    <input {...register("password",
                                        { //password input with requirements
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[a-z])/
                                        }
                                    )}
                                        type="password"
                                        className=" input  focus:bg-transparent font-bold  w-full"
                                        placeholder="Password" />
                                    <input type='submit' value='Sign Up' className="btn w-1/3 text-white mt-4 bg-green-500 border-none hover:bg-green-600" />
                                </form>
                                {/* go to login page */}
                                <Link to="/login" className=''><a className="link link-hover text-green-500">Go to Login Page</a></Link>
                            </div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;