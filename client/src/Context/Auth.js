import { createContext, useContext, useEffect, useState } from 'react';
import { register, login, getAuthUser, logout } from "../services/index";

const AuthContext = createContext({});

const AuthProvider = (props) => {

    const [authUser, setAuthUser] = useState([]);

    const registerUser = async (data) => {
        try {
            const result = await register(data);
            return result;
        } catch (error) {
            return error;
        }
    }

    const loginUser = async (data) => {
        try {
            const result = await login(data);
            checkAuthUser();
            return result;
        } catch (error) {
            return error;
        }
    }

    const checkAuthUser = async () => {
        try {
            const result = await getAuthUser();
            if (result.status === 200) {
                setAuthUser(result.data);
            }
            return result;
        } catch (error) {
            return error;
        }
    }

    const logoutUser = async () => {
        try {
            const result = await logout();
            console.log("logout");
            setAuthUser([]);
            return result;
        } catch (error) {
            return error;
        }
    }

    const values = { registerUser, loginUser, logoutUser, checkAuthUser, authUser };
    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => { return useContext(AuthContext) }
export { AuthProvider, useAuthContext }