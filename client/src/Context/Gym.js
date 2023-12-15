import { createContext, useContext, useEffect, useState } from 'react';
import { createGym, getGyms, updateGym, deleteGym } from "../services/index";

const GymContext = createContext({});

const GymProvider = (props) => {

    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        get_gyms()
    }, [])

    const create_gym = async (data) => {
        try {
            const result = await createGym(data);
            get_gyms();
            return result;
        } catch (error) {
            return error;
        }
    }

    const get_gyms = async () => {
        try {
            const result = await getGyms();
            if (result.status === 200) {
                setGyms(result.data);
            }
            return result;
        } catch (error) {
            return error;
        }
    }

    const update_gym = async (id, data) => {
        try {
            const result = await updateGym(id, data);
            if (result.status === 200) {
                get_gyms();
            }
            return;
        } catch (error) {
            return error;
        }
    }

    const delete_gym = async (id) => {
        try {
            await deleteGym(id);
            await get_gyms();
            return;
        } catch (error) {
            return error;
        }
    }

    const values = { create_gym, gyms, update_gym, delete_gym };
    return (
        <GymContext.Provider value={values}>
            {props.children}
        </GymContext.Provider>
    )
}

const useGymContext = () => { return useContext(GymContext) }
export { GymProvider, useGymContext }