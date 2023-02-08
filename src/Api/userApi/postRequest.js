import { userApi } from "../../utils/Apis/Apis";

export const addPost = async (formData) => {
  try {
    const { data } = await userApi.post("/post/addPost", formData, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error
  }
};

export const getAllProduct = async () => {
  try {
    const { data } = await userApi.get("/getMyPost", {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }); 
    return data.allPost;
  } catch (error) {
    return error
  }
};

export const getAllPosts = async () => {
  try {
    const { data } = await userApi.get("/post/getAllPosts", {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data.AllPosts;
  } catch (error) {
    return error
  }
};

export const getOnePost = async (userId, PostId) => {
  try {
    const { data } = await userApi.get(`/post/getOnePost/${userId}/${PostId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error
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
    return error
  }
};

export const likePostReq = async (PostId) => {
  try {
    const { data } = await userApi.get(`/post/likePostReq/${PostId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error
  }
};

export const postComment = async (postId, comment) => {
  try {
    const { data } = await userApi.post(
      `/post/postComment/${postId}`,
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
    return error
  }
};

export const getComments = async (postId) => {
  try {
    const { data } = await userApi.get(`/post/getComment/${postId}`, {
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
    const { data } = await userApi.get(`/post/getUserAllPost/${userId}`, {
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
    const { data } = await userApi.post("/post/likeMainComment", formData, {
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
    const { data } = await userApi.post("/post/postReplayComment", formData, {
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
    const { data } = await userApi.get(`/post/getReplayComment/${commentId}`, {
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
    const { data } = await userApi.post("/post/likeReplayComment", formData, {
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
    const { data } = await userApi.put("/post/savePost", formData, {
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
    const { data } = await userApi.get(`/post/getSavedPost/${userId}`, {
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

    const { data } =await userApi.delete(`/post/deletePost/${postId}`, {
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


export const editPost = async (postData) => {
  try {

    const { data } =await userApi.put("/post/editPost",postData, {
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

    const { data } =await userApi.put("/post/reportPost",postData, {
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