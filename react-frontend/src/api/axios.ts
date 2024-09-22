import axios from "axios";

const axiosDf = axios.create({
  baseURL: "https://task-hive-j39y.onrender.com/",
  // baseURL: "http://localhost:5000/",
  withCredentials: true,
});

export default axiosDf;
