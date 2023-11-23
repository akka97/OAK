import { createContext, useContext, useEffect, useState } from 'react';
import { createArea, getArea, deleteArea, updateArea } from "../services/index";

const AreaContext = createContext({});

const AreaProvider = (props) => {

    const [areas, setAreas] = useState([]);

    useEffect(() => {
        getAreas();
    }, []);

    const createAreas = async (data) => {
        try {
            const result = await createArea(data);
            getAreas();
            return result;
        } catch (error) {
            return error;
        }
    }

    const getAreas = async (data) => {
        try {
            const result = await getArea(data);
            if (result.status === 200) {
                setAreas(result.data);
            }
            return result;
        } catch (error) {
            return error;
        }
    }

    const updateAreas = async (id, data) => {
        try {
            const result = await updateArea(id, data);
            if (result.status === 200) {
                getAreas();
            }
            await getAreas();
            return;
        } catch (error) {
            return error;
        }
    }

    const deleteAreas = async (id) => {
        try {
            await deleteArea(id);
            await getAreas();
            return;
        } catch (error) {
            return error;
        }
    }

    const values = { createAreas, areas, updateAreas, deleteAreas };
    return (
        <AreaContext.Provider value={values}>
            {props.children}
        </AreaContext.Provider>
    )
}

const useAreaContext = () => { return useContext(AreaContext) }
export { AreaProvider, useAreaContext }