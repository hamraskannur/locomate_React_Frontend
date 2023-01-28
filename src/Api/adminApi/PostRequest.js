import { adminAPI } from '../../utils/Apis/Apis';

export const getAllBlockPost = async () => {
  const { data } = await adminAPI.get('/getAllBlockPost', { withCredentials: true });
  return data;
};


export const blockPost =async (formData) => {
    const { data } = await adminAPI.put(`/blockPost`,formData, { withCredentials: true });
    return data;
}

