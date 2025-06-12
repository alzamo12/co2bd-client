import React from 'react';
import { Link } from 'react-router';

const NavLoginBtn = () => {
    return (
        <Link className='navbar-end w-20' to="/login">
            <button className='btn btn-neutral w-full bg-green-500 text-white border-none'>Login</button>
        </Link>
    );
};

export default NavLoginBtn;