import axios from "axios";

const CustomAPI = axios.create({
    baseURL: "https://backend.dplgroupbd.com/api/v1",
    headers: {
        'token' : localStorage.getItem('token')
    }
})

export default CustomAPI;