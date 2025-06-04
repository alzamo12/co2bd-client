import React from 'react';
import { Link, NavLink } from 'react-router';
import NavbarEnd from './NavbarEnd';
import NavbarStart from './NavbarStart';
import useAuth from "../../../hooks/useAuth"
import NavLoginBtn from './NavLoginBtn';
const Navbar = () => {

    const { user } = useAuth()

    const navLinks = <>
        <li><Link to="create-event">Create Events</Link></li>
        <li><Link to="manage-events">Manage Events</Link></li>
        <li><Link to="joined-events">Joined Events</Link></li>
    </>


    return (
        <div className="navbar shadow-sm justify-between">
            <NavbarStart />
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="card-title">Upcoming Events</li>
                </ul>
            </div>
            {
                user ?
                    <NavbarEnd userName={user?.displayName} navLinks={navLinks} />
                    :
                    <NavLoginBtn />
            }
        </div>
    );
};

export default Navbar;