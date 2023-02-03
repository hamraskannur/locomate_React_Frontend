import { async } from 'q';
import { adminAPI, userApi } from '../../utils/Apis/Apis';

export const getAllReportPost = async () => {
  const { data } = await adminAPI.get('/getAllReportPost', { withCredentials: true });
  return data;
};


export const blockPost =async (formData) => {
  console.log(formData);
    const { data } = await adminAPI.put(`/blockPost`,formData, { withCredentials: true }, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    });
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
    const { data } = await adminAPI.get(`/getUserAllPost/${userId}`, {
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
    const { data } = await adminAPI.get(`/getComment/${postId}`, {
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
    const { data } = await adminAPI.get(`/getReplayComment/${commentId}`, {
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

export const getOnePost = async (PostId) => {
  try {
    const { data } = await adminAPI.get(`/getOnePost/${PostId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserAllShorts =async (UserId) => {
  try {
    const { data } = await adminAPI.get(`/getUserAllShorts/${UserId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }


}

export const getFollowingUser = async (usersId) => {
  try {
     const { data } =await adminAPI.get(`/getFollowingUser/${usersId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    })
    console.log(data.user);
   return data.user
  } catch (error) {
    console.log(error);
  }
}

export const getFollowersUser = async (usersId) => {
  try {
     const { data } =await userApi.get(`/getFollowersUser/${usersId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    })
   return data.user
  } catch (error) {
    console.log(error);
  }
}