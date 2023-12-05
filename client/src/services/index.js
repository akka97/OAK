import axios from "axios";


const register = async (data) => {
    return axios.post("http://localhost:3000/api/auth/register", data);
}

const login = async (data) => {
    return axios.post("http://localhost:3000/api/auth/login", data, { withCredentials: true });
}

const logout = async () => {
    return axios.post("http://localhost:3000/api/auth/logout");
}

const getAuthUser = async (data) => {
    return axios.get("http://localhost:3000/api/auth/user");
}

const createArea = async (data) => {
    return axios.post("http://localhost:3000/api/area", data);
}

const getArea = async (data) => {
    return axios.get("http://localhost:3000/api/area", data);
}

const updateArea = async (id, data) => {
    return axios.patch(`http://localhost:3000/api/area/${id}`, data);
}

const deleteArea = async (id) => {
    return axios.delete(`http://localhost:3000/api/area/${id}`);
}

const createCategory = async (data) => {
    return axios.post("http://localhost:3000/api/category", data);
}

const getCategory = async (data) => {
    return axios.get("http://localhost:3000/api/category", data);
}

const updateCategory = async (id, data) => {
    return axios.patch(`http://localhost:3000/api/category/${id}`, data);
}

const deleteCategory = async (id) => {
    return axios.delete(`http://localhost:3000/api/category/${id}`);
}

const createGym = async (data) => {
    return axios.post("http://localhost:3000/api/gyms", data,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

}

const getGyms = async (data) => {
    return axios.get("http://localhost:3000/api/gyms", data);
}

const updateGym = async (id, data) => {
    return axios.patch(`http://localhost:3000/api/gyms/${id}`, data);
}

const deleteGym = async (id) => {
    return axios.delete(`http://localhost:3000/api/gyms/${id}`);
}

const get_all_users = async () => {
    return axios.get(`http://localhost:3000/api/user`);
}

const create_user = async (data) => {
    return axios.post('http://localhost:3000/user', data);
}

const delete_user = async (id) => {
    return axios.delete(`http://localhost://3000/user/${id}`)
}

export {
    register,
    login,
    logout,
    createArea,
    getArea,
    updateArea,
    deleteArea,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
    getAuthUser,
    createGym,
    getGyms,
    updateGym,
    deleteGym,
    get_all_users,
    create_user,
    delete_user
};