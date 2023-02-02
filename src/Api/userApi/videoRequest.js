import { userApi } from "../../utils/Apis/Apis";

export const uploadVideo = async (formData) => {
    try {
      const { data } = await userApi.post("/video/uploadVideo", formData, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getAllVideo = async () => {
    try {
      const { data } = await userApi.get("/video/getAllPosts", {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return data.AllPosts;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getUserAllShorts = async (userId) => {
    try {
      const { data } = await userApi.get(`/video/getUserAllShorts/${userId}`, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return data.AllPosts;
    } catch (error) {
      console.log(error);
    }
  };

