
const NavbarEnd = ({navLinks, user, handleLogOut}) => {
    return (
        <div className="navbar-end w-auto gap-2 md:gap-4">
            <button onClick={handleLogOut} className="btn bg-orange-500 text-white">Logout</button>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL} />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li className="text-lg font-bold">{user.displayName || "ponku Kumar"}</li>
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavbarEnd;