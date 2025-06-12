import { Link } from "react-router";
import logo from "../../../assets/newlogo.png"
import health from "../../../assets/healthy.png"
const NavbarStart = () => {
    return (
        <Link to="/" className="navbar-start w-auto">
            <img className="h-10 py-1" src={health} alt="" />
        </Link>
    );
};

export default NavbarStart;