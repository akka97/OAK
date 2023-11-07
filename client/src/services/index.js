import axios from "axios";


const register = async (data) => {
    return axios.post("http://localhost:3000/api/auth/register", data);
}

const login = async (data) => {
    return axios.post("http://localhost:3000/api/auth/login", data);
}

const createArea = async (data) => {
    return axios.post("http://localhost:3000/api/area", data);
}

const getArea = async (data) => {
    return axios.get("http://localhost:3000/api/area", data);
}


const updateArea = async (id,data) => {
    return axios.delete(`http://localhost:3000/api/area/${id}`,data);
}

const deleteArea = async (id) =>{
    console.log("delete axios");
    return axios.delete(`http://localhost:3000/api/area/${id}`);
}

export { register, login, createArea, getArea, deleteArea, updateArea };