import { createContext, useContext, useEffect, useState } from 'react';
import { register, login } from "../services/index";

const AuthContext = createContext({});

const AuthProvider = (props) => {

    const [gyms, setGyms] = useState([]);

    useEffect(() => {

    }, []);


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
            console.log("login---", result);
            return result;
        } catch (error) {
            return error;
        }
    }

    const values = { registerUser, loginUser };
    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => { return useContext(AuthContext) }
export { AuthProvider, useAuthContext }