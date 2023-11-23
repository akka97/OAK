import { createContext, useContext, useEffect, useState } from 'react';
import { get_all_users, create_user, delete_user } from "../services/index";

const UserContext = createContext({});

const UserProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        console.log("useEffect---in---User---Context");
        getUsers();
    }, [trigger]);

    const getUsers = async () => {
        try {
            const result = await get_all_users();
            if (result.status === 200) {
                setUsers(result.data);
            }
        } catch (error) {
            return error;
        }
    }

    const createUsers = async (data) => {
        try {
            await create_user(data);
            setTrigger(true);
        } catch (error) {
            return error;
        }
    }

    const values = { users, createUsers };
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

const useUserContext = () => { return useContext(UserContext) }

export { UserProvider, useUserContext }