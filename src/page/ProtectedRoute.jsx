import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuth = localStorage.getItem("isLogged") !== null;


    if (!isAuth) {
        // Redirect to the login page or wherever you want unauthenticated users to go
        return <Navigate to="/" replace />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};

export default ProtectedRoute;