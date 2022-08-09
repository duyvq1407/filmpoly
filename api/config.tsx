import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export const API_NodeJS = axios.create({
    baseURL: "https://phim-poly.herokuapp.com/api/",
//     headers: {
//       "Content-Type": "application/json",
//     },
});

export const API_NodeLocal = axios.create({
    baseURL: "http://localhost:3001/api/",
//     headers: {
//       "Content-Type": "application/json",
//     },
});


// API_NodeJS.interceptors.request.use((config) => {
//     const token = localStorage.getItem("auth_token");
//     if (token) {
//       config.headers = {
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

  
//   API_NodeJS.interceptors.response.use((response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });
// API_NodeLocal.interceptors.request.use((config) => {
//     const token = localStorage.getItem("auth_token");
//     if (token) {
//       config.headers = {
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

  
//   API_NodeLocal.interceptors.response.use((response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });
