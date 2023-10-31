import { createContext, useContext, useEffect, useState } from 'react';
import { register } from "../services/index";

const GymContext = createContext({});

const GymProvider = (props) => {

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

    const values = { registerUser };
    return (
        <GymContext.Provider value={values}>
            {props.children}
        </GymContext.Provider>
    )
}

const useGymContext = () => { return useContext(GymContext) }
export { GymProvider, useGymContext }