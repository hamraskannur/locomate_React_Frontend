import { adminAPI } from '../../utils/Apis/Apis';

export const getAllUser = async () => {
  const response = await adminAPI.get('/getAllUser');
  return response.data.Users;
};

export const blockUser = async (Status, userId) => {
  const response = await adminAPI.get(`/changeStatus/${Status}/${userId}`);
  return response.data;
};
export const getAllNotifications = async () => {
  const { data } = await adminAPI.get("/getAllNotifications",  {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  });
  return data.admin

}

export const checkNewNotification = async () => {
  const { data } = await adminAPI.get("/checkNewNotification",  {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  });
  return data
}