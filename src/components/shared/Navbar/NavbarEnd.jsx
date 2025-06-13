
const NavbarEnd = ({ navLinks, user, handleLogOut }) => {
    return (
        <div className="navbar-end  w-auto gap-2 md:gap-4">
            {/* logout button */}
            <button onClick={handleLogOut} className="btn bg-green-500 text-white">Logout</button>
            {/* pfp  */}
            <div className="dropdown group dropdown-end">
                {/* pfp avatar */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL} />
                    </div>
                </div>
                <h2 className="font-bold text-base w-20 group-hover:block hidden absolute top-10 bg-black opacity-50  px-2 py-1 text-white rounded-lg">{user.displayName}</h2>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li className="text-lg font-bold">{user.displayName || "ponkuz Kumar"}</li>
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavbarEnd;