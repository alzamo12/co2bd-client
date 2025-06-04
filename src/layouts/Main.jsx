import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='md:max-w-11/12 mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;