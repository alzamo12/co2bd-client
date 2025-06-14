import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar/Navbar';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner"
import { ToastContainer } from 'react-toastify';

const Main = () => {
    const { loading } = useAuth();

    if (loading) return <LoadingSpinner />

    return (
        <div className=''>
            <ToastContainer />
            <Navbar />
            <div className="md:w-11/12 mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;