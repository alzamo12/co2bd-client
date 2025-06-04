import React from 'react';
import { Link } from 'react-router';

const NavLoginBtn = () => {
    return (
        <Link className='navbar-end w-20' to="/login">
            <button className='btn btn-neutral w-full bg-orange-400 text-white border-none'>Login</button>
        </Link>
    );
};

export default NavLoginBtn;