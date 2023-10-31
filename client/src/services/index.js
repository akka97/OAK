import axios from "axios";


const register = async (data) => {
    return axios.post("http://localhost:3000/api/auth/register", data);
}


export { register };