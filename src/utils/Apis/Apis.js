import axios from 'axios';

export const userApi = axios.create({ baseURL:"http://localhost:3008" });

export const adminAPI = axios.create({ baseURL:"http://localhost:3008/admin" });

export const cloudApi = axios.create({ baseURL:`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_API}/image`})
