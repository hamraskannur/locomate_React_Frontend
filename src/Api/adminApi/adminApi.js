import { adminAPI } from '../../utils/Apis/Apis';

export const getAllUser = async () => {
  const response = await adminAPI.get('/getAllUser');
  return response.data.Users;
};

export const blockUser = async (Status, userId) => {
  const response = await adminAPI.get(`/changeStatus/${Status}/${userId}`);
  return response.data;
};
