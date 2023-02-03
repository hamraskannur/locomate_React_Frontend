import { login } from "../../../Api/userApi/userAuthRequest";

export const emailChangeHandler = (event, setEnteredEmail) => {
  setEnteredEmail(event.target.value);
};

export const passwordChangeHandler = (event, setEnteredPassword) => {
  setEnteredPassword(event.target.value);
};

export const showPassword = (passwordShown, setPasswordShown) => {
  if (passwordShown) {
    setPasswordShown(false);
  } else {
    setPasswordShown(true);
  }
};

export const submitHandler = async (
  enteredEmail,
  enteredPassword,
  setErrMessage,
  setResponse
) => {
  if (enteredEmail.trim().length > 0) {
    if (enteredPassword.trim().length > 0) {
      if (enteredEmail.includes("@") && enteredEmail.trim().length > 7) {
        if (enteredPassword.trim().length > 5) {
          const response = await login({
            email: enteredEmail,
            password: enteredPassword,
          });
          setResponse(response);
        } else {
          console.log("password minimum 5 numbers");
          setErrMessage("password minimum 5 numbers");
        }
      } else {
        console.log("wrong email");
        setErrMessage("wrong email");
      }
    } else {
      console.log("fill Password");
      setErrMessage("fill Password");
    }
  } else {
    console.log("money2");

    setErrMessage("fill email");
  }
};
