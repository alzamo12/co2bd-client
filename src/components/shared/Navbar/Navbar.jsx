import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import NavbarEnd from './NavbarEnd';
import NavbarStart from './NavbarStart';
import useAuth from "../../../hooks/useAuth"
import NavLoginBtn from './NavLoginBtn';
const Navbar = () => {

    const { user, logOut } = useAuth();

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light");
    // const { theme, setTheme } = useContext(ThemeContext);
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const navLinks = <>
        <li><Link to="create-event">Create Events</Link></li>
        <li><Link to="manage-events">Manage Events</Link></li>
        <li><Link to="joined-events">Joined Events</Link></li>
    </>;

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="navbar md:w-11/12 mx-auto shadow-sm justify-between">
            <NavbarStart />
            <div className="text-xs font-bold cursor-pointer lg:flex">
                <Link to="/upcoming-events" className='md:card-title'>Upcoming Events</Link>
            </div>
            <div>
                 {
                user ?
                    <NavbarEnd handleToggle={handleToggle} handleLogOut={handleLogOut} user={user} navLinks={navLinks} />
                    :
                    <NavLoginBtn />
            }
               
            </div>
        </div>
    );
};

export default Navbar;