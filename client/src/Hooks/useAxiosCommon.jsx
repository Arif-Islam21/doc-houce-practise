import axios from "axios";

const axiosCommon = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
