import axios from "axios";

export const api = axios.create({
    baseURL: "https://everypets-backend.herokuapp.com/#"
});