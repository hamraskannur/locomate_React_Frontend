import axios from 'axios';

export const userApi = axios.create({ baseURL:"http://localhost:3008" });

export const adminAPI = axios.create({ baseURL:"http://localhost:3008/admin" });
