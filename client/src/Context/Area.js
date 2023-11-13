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

    const editAreas = async (data) => {
        try {
            const res = await editAreas(data);
            getAreas();
            return res;

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
            console.log("results---updateAreas--", result);
            if (result.status === 200) {
                setAreas(result.data)
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
            //console.log("results---deleteAreas--",result);
            await getAreas();
            return;
        } catch (error) {
            return error;
        }
    }

    const values = { createAreas, areas, updateAreas, deleteAreas, editAreas };
    return (
        <AreaContext.Provider value={values}>
            {props.children}
        </AreaContext.Provider>
    )
}

const useAreaContext = () => { return useContext(AreaContext) }
export { AreaProvider, useAreaContext }