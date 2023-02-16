import { adminAPI } from '../../utils/Apis/Apis';

export const adminLogin = async (formData) => {
  try{
    const response = await adminAPI.post('/login', formData, { withCredentials: true });
    return response.data.userSignUpp;
  }catch(error){
    return error
  }
};
