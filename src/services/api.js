import axios from 'axios';

const api = axios.create({
    // baseURL: "https://api.github.com"
    baseURL: "http://localhost:4000"
});

export default api;