import { adminAPI } from '../../utils/Apis/Apis';

export const getAllUser = async () => {
  try{
    const response = await adminAPI.get('/getAllUser');
    return response.data.Users;
  }catch( error){
    return error
  }
};

export const blockUser = async (Status, userId) => {
  try{
    const response = await adminAPI.get(`/changeStatus/${Status}/${userId}`);
    return response.data;
  }catch(error){
    return error
  }
};
export const getAllNotifications = async () => {
  try{
    const { data } = await adminAPI.get("/getAllNotifications");
    return data.admin
  }catch(error){
    return error
  }
}

export const checkNewNotification = async () => {
  try{
    const { data } = await adminAPI.get("/checkNewNotification");
    return data
  }catch(error){
    return error
  }
}