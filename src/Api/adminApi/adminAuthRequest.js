import { adminAPI } from '../../utils/Apis/Apis';

export const adminLogin = async (formData) => {
  const response = await adminAPI.post('/login', formData, { withCredentials: true });
  return response.data.userSignUpp;
};
