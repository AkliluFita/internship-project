import axios from "axios";

const baseURL = "http://localhost:8000/api/v1";

const httpCommon = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export default httpCommon;
