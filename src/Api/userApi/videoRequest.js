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
  
  export const likeShortReq = async (PostId) => {
    try {
      const { data } = await userApi.get(`/video/likeShortReq/${PostId}`, {
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

  
  export const deleteShort = async (postId) => {
    try {
  
      const { data } =await userApi.delete(`/video/deleteShort/${postId}`, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      return data
    } catch (error) {
      console.log(error);
    } 
  }
  
  export const getShortsComments = async (postId) => {
    try {
      const { data } = await userApi.get(`/video/getShortComment/${postId}`, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (data.success) {
        return data.comments;
      }
    } catch (error) {
      console.log(error);
    }
  };


  export const postShortsComment = async (postId, comment) => {
    try {
      const { data } = await userApi.post(
        `/video/postShortsComment/${postId}`,
        { comment },
        {
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (data.success) {
      
  
        return data.comment;
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export const likeShortsMainComment = async (formData) => {
    try {
      const { data } = await userApi.post("/video/likeShortsMainComment", formData, {
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
  
  export const shortsReplayComment = async (formData) => {
    try {
      const { data } = await userApi.post("/video/shortsReplayComment", formData, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return data.comments;
    } catch (error) {
      console.log(error);
    }
  };

  export const likeShortsReplayComment = async (formData) => {
    try {
      const { data } = await userApi.post("/video/likeShortsReplayComment", formData, {
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
  export const editShorts = async (ShortsData) => {
    try {
  
      const { data } =await userApi.put("/video/editShorts",ShortsData, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      return data
    } catch (error) {
      console.log(error);
    } 
  }

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