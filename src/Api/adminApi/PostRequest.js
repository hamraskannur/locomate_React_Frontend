import { adminAPI, userApi } from '../../utils/Apis/Apis';

export const getAllBlockPost = async () => {
  const { data } = await adminAPI.get('/getAllBlockPost', { withCredentials: true });
  return data;
};


export const blockPost =async (formData) => {
    const { data } = await adminAPI.put(`/blockPost`,formData, { withCredentials: true });
    return data;
}

export const getOneUser =async (userId) =>{
  try {
    const { data } = await userApi.get(`/getFriendsAccount/${userId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    });
    return data.FriendsAccount;
  } catch (error) {
    console.log(error);
  }
}

export const getUserAllPost = async (userId) => {
  try {
    const { data } = await userApi.get(`/getUserAllPost/${userId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    });
    return data.AllPosts;
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (postId) => {
  try {
    const { data } = await userApi.get(`/getComment/${postId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    });
    if (data.success) {
      return data.comments;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getReplayComment = async (commentId) => {
  try {
    const { data } = await userApi.get(`/getReplayComment/${commentId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    });
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};