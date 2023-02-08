import axios from 'axios';

export const userApi = axios.create({ baseURL:process.env.REACT_APP_USER_API });

export const adminAPI = axios.create({ baseURL:process.env.REACT_APP_ADMIN_API });

export const cloudApi = axios.create({ baseURL:`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_API}/image`})
