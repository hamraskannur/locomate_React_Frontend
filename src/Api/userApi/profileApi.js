import { userApi,cloudApi } from "../../utils/Apis/Apis";

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
    const { data } = await cloudApi.post(`/upload`,formData);
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
