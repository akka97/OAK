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

const get_all_users = async () => {
    return axios.get(`http://localhost:3000/api/user`);
}

const create_user = async (data) => {
    return axios.post('http://localhost:3000/user', data);
}

const delete_user = async (id) => {
    return axios.delete(`http://localhost://3000/user/${id}`)
}

export { register, login, createArea, getArea, deleteArea, updateArea, getAuthUser, logout, get_all_users, create_user, delete_user };