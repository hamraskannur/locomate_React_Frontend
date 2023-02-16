import { async } from "q";
import { adminAPI, userApi } from "../../utils/Apis/Apis";

export const getAllReportPost = async () => {
  try {
    const { data } = await adminAPI.get("/getAllReportPost", {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const blockPost = async (formData) => {
  try {
    const { data } = await adminAPI.put(`/blockPost`, formData);
    return data;
  } catch (error) {
    return error;
  }
};

export const getOneUser = async (userId) => {
  try {
    const { data } = await userApi.get(`/getFriendsAccount/${userId}`);
    return data.FriendsAccount;
  } catch (error) {
    return error;
  }
};

export const getUserAllPost = async (userId) => {
  try {
    const { data } = await adminAPI.get(`/getUserAllPost/${userId}`);
    return data.AllPosts;
  } catch (error) {
    return error;
  }
};

export const getComments = async (postId) => {
  try {
    const { data } = await adminAPI.get(`/getComment/${postId}`);
    if (data.success) {
      return data.comments;
    }
  } catch (error) {
    return error;
  }
};

export const getReplayComment = async (commentId) => {
  try {
    const { data } = await adminAPI.get(`/getReplayComment/${commentId}`);
    return data.comments;
  } catch (error) {
    return error;
  }
};

export const getOnePost = async (PostId) => {
  try {
    const { data } = await adminAPI.get(`/getOnePost/${PostId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserAllShorts = async (UserId) => {
  try {
    const { data } = await adminAPI.get(`/getUserAllShorts/${UserId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getFollowingUser = async (usersId) => {
  try {
    const { data } = await adminAPI.get(`/getFollowingUser/${usersId}`);
    return data.user;
  } catch (error) {
    return error;
  }
};

export const getFollowersUser = async (usersId) => {
  try {
    const { data } = await adminAPI.get(`/getFollowersUser/${usersId}`);
    return data.user;
  } catch (error) {
    return error;
  }
};
export const getAllPost = async () => {
  try {
    const { data } = await adminAPI.get("/getAllPost");
    return data.AllPosts;
  } catch (error) {
    return error;
  }
};
export const getAllVideo = async () => {
  try {
    const { data } = await adminAPI.get("/getAllVideo");
    return data.AllPosts;
  } catch (error) {
    return error;
  }
};
