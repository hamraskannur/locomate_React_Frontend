import { userApi, cloudApi } from "../../utils/Apis/Apis";

export const getMyProfile = async () => {
  try {
    const { data } = await userApi.get("/getMyProfile", {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data.user;
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async () => {
  try {
    const { data } = await userApi.get("/getUserData", {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return data.user;
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const saveUserData = async (formData) => {
  try {
    const { data } = await userApi.put("/updateUserData", formData, {
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

export const changeToPrivate = async (checked) => {
  try {
    const { data } = await userApi.put("/changeToPrivate", checked, {
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

export const searchUserApi = async (searchData) => {
  try {
    const { data } = await userApi.post(
      "/searchUser",
      { searchData },
      {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllNotifications = async () => {
  try {
    const { data } = await userApi.get(
      "/getAllNotifications",
      {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    return data.user
  } catch (error) {
    console.log(error);
  }
};

export const suggestionUsers = async () => {
  try {
    const { data } = await userApi.get(
      "/suggestionUsers",
      {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    return data.notFollowedUsers

  }catch (error) {

  }
}