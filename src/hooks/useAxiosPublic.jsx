import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-milanese-server.onrender.com'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;