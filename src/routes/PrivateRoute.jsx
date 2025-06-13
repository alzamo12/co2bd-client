import useAuth from "../hooks/useAuth"
import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner"
import { Navigate, useLocation } from "react-router";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <LoadingSpinner />
    if (user) return children
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;