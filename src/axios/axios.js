import axios from "axios";

// const BASE_URL = "http://localhost:8000/api/v1/";
const BASE_URL = "https://2476-103-44-172-142.ngrok-free.app/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
