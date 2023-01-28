import { userApi } from "../../utils/Apis/Apis";

export const followUser = async (formData) => {
  try {
    const { data } = await userApi.put("/followUser", formData, {
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

export const getAllRequest = async () => {
  try {
    const { data } = await userApi.get("/getAllRequest", {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return data.Request;
  } catch (error) {
    console.log(error);
  }
};

export const acceptRequest = async (formData) => {
  try {
    const { data } = await userApi.put("/acceptRequest", formData, {
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

export const deleteRequests = async (deleteId) => {
  try {
    const { data } = await userApi.delete(`/deleteRequests/${deleteId}`, {
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


export const getFollowingUser = async (usersId) => {
  try {
     const { data } =await userApi.get(`/getFollowingUser/${usersId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
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
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
   return data.user
  } catch (error) {
    console.log(error);
  }
}