import { userApi } from "../../utils/Apis/Apis";

export const uploadVideo = async (formData) => {
    try {
      const { data } = await userApi.post("/video/uploadVideo", formData);
      return data;
    } catch (error) {
       return error
    }
  };
  
  export const getAllVideo = async () => {
    try {
      const { data } = await userApi.get("/video/getAllPosts");
      return data.AllPosts;
    } catch (error) {
      return error
    }
  };
  
  export const getUserAllShorts = async (userId) => {
    try {
      const { data } = await userApi.get(`/video/getUserAllShorts/${userId}`);
      return data.AllPosts;
    } catch (error) {
      return error
    }
  };

