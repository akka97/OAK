import { createContext, useContext, useEffect, useState } from 'react';
import { register, login, getAuthUser, logout } from "../services/index";

const AuthContext = createContext({});

const AuthProvider = (props) => {

    const [authUser, setAuthUser] = useState([]);
    const [action, setAction] = useState(false);

    useEffect(() => {
        // console.log("useEffect--auth");
        checkAuthUser();
    }, [action]);

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
            if (result.status === 201) {
                setAuthUser(result.data);
                setAction(true);
            }
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
            setAuthUser({ 
                message: error.response.data.message,
                status: error.response.data.statusCode
            })
            return error;
        }
    }

    const logoutUser = async () => {
        try {
            await logout();
            setAuthUser([]);
            return;
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