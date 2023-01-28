export const emailChangeHandler = (event, setEnteredEmail) => {
  setEnteredEmail(event.target.value);
};

export const passwordChangeHandler = (event, setEnteredPassword) => {
  setEnteredPassword(event.target.value);
};
export const showPassword = (passwordShown, setPasswordShown) => {
  if (passwordShown) { setPasswordShown(false); } else { setPasswordShown(true); }
};
