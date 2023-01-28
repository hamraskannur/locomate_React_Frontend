import { signUp } from '../../../Api/userApi/userAuthRequest';

export const showPassword = (passwordShown, setPasswordShown) => {
  if (passwordShown) { setPasswordShown(false); } else { setPasswordShown(true); }
};

export const showRepeatPassword = (RepeatPasswordShown, setRepeatPasswordShown) => {
  if (RepeatPasswordShown) { setRepeatPasswordShown(false); } else { setRepeatPasswordShown(true); }
};

export const nameChangeHandler = (event, setEnteredName) => {
  setEnteredName(event.target.value);
};
export const emailChangeHandler = (event, setEnteredEmail) => {
  setEnteredEmail(event.target.value);
};
export const dobChangeHandler = (event, setEnteredUserName) => {
  setEnteredUserName(event.target.value);
};

export const phoneNoChangeHandler = (event, setEnteredPhoneNo) => {
  setEnteredPhoneNo(event.target.value);
};

export const passwordChangeHandler = (event, setEnteredPassword) => {
  setEnteredPassword(event.target.value);
};

export const repeatPasswordHandler = (event, setEnteredRepeatPassword) => {
  setEnteredRepeatPassword(event.target.value);
};
export const usernameChangeHandler = (event, setUsername) => {
  setUsername(event.target.value);
};

export const submitHandler = async (
  event,
  enteredName,
  username,
  enteredEmail,
  enteredPhoneNo,
  enteredDob,
  enteredPassword,
  enteredRepeatPassword,
  setEnteredName,
  setEnteredEmail,
  setUserName,
  setEnteredDob,
  setEnteredPhoneNo,
  setEnteredPassword,
  setEnteredRepeatPassword,
  setVerify,
  setErrMessage,
) => {
  event.preventDefault();
  if (enteredName.trim().length > 5) {
    if (username.trim().length > 5) {
      if (enteredEmail.includes('@') && enteredEmail.trim().length > 7) {
        if (enteredPhoneNo.trim().length === 10) {
          if (enteredDob.trim().length > 0) {
            if (enteredPassword.trim().length > 5) {
              if (enteredRepeatPassword === enteredPassword) {
                const response = await signUp({
                  name: enteredName,
                  email: enteredEmail,
                  dob: enteredDob,
                  phoneNo: enteredPhoneNo,
                  password: enteredPassword,
                  username,
                });
                if (response.Status) {
                  setEnteredName('');
                  setEnteredEmail('');
                  setUserName('');
                  setEnteredDob('');
                  setEnteredPhoneNo('');
                  setEnteredPassword('');
                  setEnteredRepeatPassword('');
                  setVerify(response.message);
                } else {
                  setErrMessage(response.message);
                }
              } else {
                setErrMessage('repeat password wrong');
              }
            } else {
              setErrMessage('password minimum 5 numbers');
            }
          } else {
            setErrMessage('please fill your Date of birth');
          }
        } else {
          setErrMessage('please fill your PhoneNo');
        }
      } else {
        setErrMessage('wrong email');
      }
    } else {
      setErrMessage('please fill your username');
    }
  } else {
    setErrMessage('please fill your name');
  }
};
