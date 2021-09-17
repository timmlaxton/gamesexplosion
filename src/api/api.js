import axios from "axios";

const base_url = "https://api.rawg.io/api/";

const axiosParams = {
  baseURL: base_url,
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    delete: (url, config) => axios.delete(url, config),
    post: (url, body, config) => axios.get(url, body, config),
    patch: (url, body, config) => axios.get(url, body, config),
    put: (url, body, config) => axios.get(url, body, config),
  };
};

export default api(axiosInstance);
