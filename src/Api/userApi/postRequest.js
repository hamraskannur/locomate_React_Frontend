import { userApi } from "../../utils/Apis/Apis";

export const addPost = async (formData) => {
  try {
    const { data } = await userApi.post("/post/addPost", formData);
    return data;
  } catch (error) {
    return error
  }
};

export const getAllProduct = async () => {
  try {
    const { data } = await userApi.get("/getMyPost"); 
    return data.allPost;
  } catch (error) {
    return error
  }
};

export const getAllPosts = async () => {
  try {
    const { data } = await userApi.get("/post/getAllPosts");
    return data.AllPosts;
  } catch (error) {
    return error
  }
};

export const getOnePost = async (userId, PostId) => {
  try {
    const { data } = await userApi.get(`/post/getOnePost/${userId}/${PostId}`);
    return data;
  } catch (error) {
    return error
  }
};

export const getFriendsAccount = async (userId) => {
  try {
    const { data } = await userApi.get(`/getFriendsAccount/${userId}`);
    return data.FriendsAccount;
  } catch (error) {
    return error
  }
};
  
export const likePostReq = async (PostId) => {
  try {
    const { data } = await userApi.get(`/post/likePostReq/${PostId}`);
    return data;
  } catch (error) {
    return error
  }
};

export const postComment = async (postId, comment) => {
  try {
    const { data } = await userApi.post(
      `/post/postComment/${postId}`,
      { comment }
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
    const { data } = await userApi.get(`/post/getComment/${postId}`);
    if (data.success) {
      return data.comments;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserAllPost = async (userId) => {
  try {
    const { data } = await userApi.get(`/post/getUserAllPost/${userId}`);
    return data.AllPosts;
  } catch (error) {
    console.log(error);
  }
};

export const likeMainComment = async (formData) => {
  try {
    const { data } = await userApi.post("/post/likeMainComment", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postReplayComment = async (formData) => {
  try {
    const { data } = await userApi.post("/post/postReplayComment", formData);
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const getReplayComment = async (commentId) => {
  try {
    const { data } = await userApi.get(`/post/getReplayComment/${commentId}`);
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const likeReplayComment = async (formData) => {
  try {
    const { data } = await userApi.post("/post/likeReplayComment", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const savePost = async (formData) => {
  try {
    const { data } = await userApi.put("/post/savePost", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
  
export const getSavedPost = async (userId) => {
  try {
    const { data } = await userApi.get(`/post/getSavedPost/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (postId) => {
  try {

    const { data } =await userApi.delete(`/post/deletePost/${postId}`)
    return data
  } catch (error) {
    console.log(error);
  } 
}


export const editPost = async (postData) => {
  try {

    const { data } =await userApi.put("/post/editPost",postData)
    return data
  } catch (error) {
    console.log(error);
  } 
}

export const reportPost = async (postData) => {
  try {
    const { data } =await userApi.put("/post/reportPost",postData)
    return data
  } catch (error) {
    console.log(error);
  } 
}