import { useAuthContext } from "../Context/Auth";
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const { authUser } = useAuthContext();

    console.log("authUser----", authUser.role);


    //result.data.role === "admin"
    return (authUser.role === "admin" ? <Outlet /> : <Navigate to={"/admin/areas"} />)
};

export default PrivateRoute;