import axios from "axios";

export const userApi = axios.create({
  baseURL: process.env.REACT_APP_USER_API,
});

userApi.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("token");
  }
  return req;
});


userApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
           localStorage.clear()
           window.location.href = "/login";
      } else{
        window.location.href = "/*";
      }
    }
    return Promise.reject(error);
  }
);


export const adminAPI = axios.create({
  baseURL: process.env.REACT_APP_ADMIN_API,
});

adminAPI.interceptors.request.use((req) => {
  if (localStorage.getItem("adminToken")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("adminToken");
  }
  return req;
});

export const cloudApi = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_API}/image`,
});


export const cloudApiVideo = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_API}/video`,
});
