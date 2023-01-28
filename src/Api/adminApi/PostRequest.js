import { adminAPI, userApi } from '../../utils/Apis/Apis';

export const getAllBlockPost = async () => {
  const { data } = await adminAPI.get('/getAllBlockPost', { withCredentials: true });
  return data;
};


export const blockPost =async (formData) => {
    const { data } = await adminAPI.put(`/blockPost`,formData, { withCredentials: true });
    return data;
}

export const getOneUser =async () =>{
  try {
    const { data } = await userApi.get(`/getFriendsAccount/${userId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("AdminToken"),
      },
    });
    return data.FriendsAccount;
  } catch (error) {
    console.log(error);
  }
}