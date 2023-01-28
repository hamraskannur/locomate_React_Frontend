import { userApi } from "../../utils/Apis/Apis";

export const signUp = async (formData) => {
  try {
    const { data } = await userApi.post("/register", formData);
    return data.userSignup;
    
  } catch (error) {
    console.log(error);
  }
};
export const verifySignUp = async (id, token) => {
  try {
    const { data } = await userApi.get(`/verifySignUp/${id}/${token}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (formData) => {
  try {
    const { data } = await userApi.post("/login", formData, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GoogleLogin = async (formData) => {
  try {
    const { data } = await userApi.post("/googleLogin", formData, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
