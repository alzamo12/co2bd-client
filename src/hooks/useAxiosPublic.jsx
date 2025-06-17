import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://co2bd-server.vercel.app/"
});

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;