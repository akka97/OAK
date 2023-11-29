import { createContext, useContext, useEffect, useState } from 'react';
import { createCategory, getCategory, updateCategory, deleteCategory } from "../services/index";

const CategoryContext = createContext({});

const CategoryProvider = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        get_category()
    }, [])

    const create_category = async (data) => {
        try {
            const result = await createCategory(data);
            get_category();
            return result;
        } catch (error) {
            return error;
        }
    }

    const get_category = async (data) => {
        try {
            const result = await getCategory(data);
            if (result.status === 200) {
                setCategories(result.data);
            }
            return result;
        } catch (error) {
            return error;
        }
    }

    const update_category = async (id, data) => {
        try {
            const result = await updateCategory(id, data);
            if (result.status === 200) {
                getCategory();
            }
            return;
        } catch (error) {
            return error;
        }
    }

    const delete_category = async (id) => {
        try {
            await deleteCategory(id);
            await getCategory();
            return;
        } catch (error) {
            return error;
        }
    }

    const values = { create_category, categories, update_category, delete_category };
    return (
        <CategoryContext.Provider value={values}>
            {props.children}
        </CategoryContext.Provider>
    )
}

const useCategoryContext = () => { return useContext(CategoryContext) }
export { CategoryProvider, useCategoryContext }