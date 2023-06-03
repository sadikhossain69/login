import axios from "axios";

const baseAPI = axios.create({
    baseURL: "http://localhost:5000/user",
})

export default baseAPI;