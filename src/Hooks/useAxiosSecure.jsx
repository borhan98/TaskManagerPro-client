import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://task-manager-pro-server.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;