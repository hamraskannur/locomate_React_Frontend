import { userApi, cloudApi, cloudApiVideo } from "../../utils/Apis/Apis";

export const getMyProfile = async () => {
  try {
    const { data } = await userApi.get("/getMyProfile");
    return data.user;
  } catch (error) {
    return error;
  }
};

export const getUserData = async () => {
  try {
    const { data } = await userApi.get("/getUserData");
    return data.user;
  } catch (error) {
    return error;
  }
};

export const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "ete0nc34");
    const { data } = await cloudApi.post(`/upload`, formData);
    return data?.secure_url;
  } catch (error) {
    return error;
  }
};

export const uploadPost = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "ete0nc34");
    const { data } = await cloudApi.post(`/upload`, formData);
    return data?.secure_url;
  } catch (error) {
    return error;
  }
};

export const uploadvideoPost= async (videoFile) => {
  try {
    const formData = new FormData();
    formData.append('file', videoFile);
    formData.append("upload_preset", "ete0nc34");
    const { data } = await cloudApiVideo.post(`/upload`, formData);
    return data?.secure_url;
  } catch (error) {
    return error;
  }
};

export const saveUserData = async (formData) => {
  try {
    const { data } = await userApi.put("/updateUserData", formData);
    return data;
  } catch (error) {
    return error;
  }
};

export const changeToPrivate = async (checked) => {
  try {
    const { data } = await userApi.put("/changeToPrivate", checked);
    return data;
  } catch (error) {
    return error;
  }
};

export const searchUserApi = async (searchData) => {
  try {
    const { data } = await userApi.post("/searchUser", { searchData });
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllNotifications = async () => {
  try {
    const { data } = await userApi.get("/getAllNotifications");
    return data.user;
  } catch (error) {
    return error;
  }
};

export const suggestionUsers = async () => {
  try {
    const { data } = await userApi.get("/suggestionUsers");
    return data.notFollowedUsers;
  } catch (error) {
    return error;
  }
};
