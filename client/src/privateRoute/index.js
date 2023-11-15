import { useAuthContext } from "../Context/Auth";
import { Navigate, Outlet } from 'react-router-dom';

import { useEffect } from "react";

const PrivateRoute = (props) => {
    const { authUser } = useAuthContext();

    const adminStatus = JSON.parse(localStorage.getItem("admin"))

    console.log("--PrivateRoute-localStorage----", adminStatus);

    //return (authUser.role === "admin" ? <Outlet /> : <Navigate to={"/admin/areas"} />)

    // return <Outlet />
    if (adminStatus) {
        console.log("authUser---PrivateRoute-----if--", adminStatus);
        return <Outlet />
    } else {
        console.log("authUser---PrivateRoute-----else-", adminStatus);
        return <Navigate to={"/"} replace />
    }
};

export default PrivateRoute;