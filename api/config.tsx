import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export const API_NodeJS = axios.create({
    baseURL: "https://nodejs-group-8.herokuapp.com/api/",
});

