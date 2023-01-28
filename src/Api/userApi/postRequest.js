import { userApi } from "../../utils/Apis/Apis";
import { startLoading,completedLoading } from '../../redux/topLoadingBar'

export const addPost = async (formData) => {
  try {
    const { data } = await userApi.post("/addPost", formData, {
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

export const getAllProduct = async () => {
  try {
    dispatch(startLoading())
    const { data } = await userApi.get("/getMyPost", {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }); 
    dispatch(completedLoading())
    return data.allPost;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = async () => {
  try {
    const { data } = await userApi.get("/getAllPosts", {
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

export const getOnePost = async (userId, PostId) => {
  try {
    const { data } = await userApi.get(`/getOnePost/${userId}/${PostId}`, {
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

export const getFriendsAccount = async (userId) => {
  try {
    const { data } = await userApi.get(`/getFriendsAccount/${userId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data.FriendsAccount;
  } catch (error) {
    console.log(error);
  }
};

export const likePostReq = async (PostId) => {
  try {
    const { data } = await userApi.get(`/likePostReq/${PostId}`, {
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

export const postComment = async (postId, comment) => {
  try {
    const { data } = await userApi.post(
      `/postComment/${postId}`,
      { comment },
      {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (data.success) {
      const newComment = {
        ...data.comment,
        userId: data.comment.userId._id,
        firstName: data.comment.userId.username,
      };

      return newComment;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (postId) => {
  try {
    const { data } = await userApi.get(`/getComment/${postId}`, {
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

export const getUserAllPost = async (userId) => {
  try {
    const { data } = await userApi.get(`/getUserAllPost/${userId}`, {
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

export const likeMainComment = async (formData) => {
  try {
    const { data } = await userApi.post("/likeMainComment", formData, {
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

export const postReplayComment = async (formData) => {
  try {
    const { data } = await userApi.post("/postReplayComment", formData, {
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

export const getReplayComment = async (commentId) => {
  try {
    const { data } = await userApi.get(`/getReplayComment/${commentId}`, {
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

export const likeReplayComment = async (formData) => {
  try {
    const { data } = await userApi.post("/likeReplayComment", formData, {
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

export const savePost = async (formData) => {
  try {
    const { data } = await userApi.put("/savePost", formData, {
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
  
export const getSavedPost = async (userId) => {
  try {
    const { data } = await userApi.get(`/getSavedPost/${userId}`, {
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

export const deletePost = async (postId) => {
  try {

    const { data } =await userApi.delete(`/deletePost/${postId}`, {
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


export const editePost = async (postData) => {
  try {

    const { data } =await userApi.put("/editPost",postData, {
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

export const reportPost = async (postData) => {
  try {

    const { data } =await userApi.put("/reportPost",postData, {
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