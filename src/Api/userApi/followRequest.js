import { userApi } from "../../utils/Apis/Apis";

export const followUser = async (formData) => {
  try {
    const { data } = await userApi.put("/followUser", formData, {
      withCredentials: true
    });
    return data;
  } catch (error) {
    return error
  }
};

export const getAllRequest = async () => {
  try {
    const { data } = await userApi.get("/getAllRequest", {
      withCredentials: true
    });

    return data.Request;
  } catch (error) {
    return error
  }
};

export const acceptRequest = async (formData) => {
  try {
    const { data } = await userApi.put("/acceptRequest", formData, {
      withCredentials: true
    });

    return data;
  } catch (error) {
    return error
  }
};

export const deleteRequests = async (deleteId) => {
  try {
    const { data } = await userApi.delete(`/deleteRequests/${deleteId}`, {
      withCredentials: true
    });

    return data;
  } catch (error) {
    return error
  }
};


export const getFollowingUser = async (usersId) => {
  try {
     const { data } =await userApi.get(`/getFollowingUser/${usersId}`, {
      withCredentials: true
    })
   return data.user
  } catch (error) {
    return error
  }
}


export const getFollowersUser = async (usersId) => {
  try {
     const { data } =await userApi.get(`/getFollowersUser/${usersId}`, {
      withCredentials: true
    })
   return data.user
  } catch (error) {
    return error
  }
}

