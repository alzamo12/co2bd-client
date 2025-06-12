import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar />
            <div className="md:w-11/12 mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;