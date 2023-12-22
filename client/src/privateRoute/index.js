import { useAuthContext } from "../Context/Auth";
import { Navigate, Outlet } from 'react-router-dom';

import { useEffect } from "react";

const PrivateRoute = () => {
    const { authUser } = useAuthContext();

    const adminStatus = JSON.parse(localStorage.getItem("admin"));

    //return (authUser.role === "admin" ? <Outlet /> : <Navigate to={"/admin/areas"} />)

    if (authUser.status === 401) {
        localStorage.removeItem("admin")
        return <Navigate to={"/"} replace />
    } else {
        if (adminStatus) {
            return <Outlet />
        } else {
            return <Navigate to={"/"} replace />
        }
    }
};

export default PrivateRoute;