import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar/Navbar';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner"
import { ToastContainer } from 'react-toastify';
import Footer from '../components/shared/Footer/Footer';

const Main = () => {
    const { loading } = useAuth();

    if (loading) return <LoadingSpinner />

    return (
        <div className=''>
            <title>CO_2_BD</title>
            <ToastContainer />
            <div className="space-y-10 ">
                    <Navbar/>
                <div className="px-2 md:w-11/12 mx-auto pt-16">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;