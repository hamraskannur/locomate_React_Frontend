import { adminAPI } from '../../utils/Apis/Apis';

// eslint-disable-next-line import/prefer-default-export
export const adminLogin = async (formData) => {
  const response = await adminAPI.post('/login', formData, { withCredentials: true });
  return response.data.userSignUpp;
};
