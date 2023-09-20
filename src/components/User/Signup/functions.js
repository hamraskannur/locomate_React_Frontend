export const valid = (setErrors,formData) => {
  const newErrors = {};

  if (!formData.name) {
    newErrors.name = "Name is required";
  }
  if (
    !formData.email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Invalid email address";
  }
  if (!formData.password || formData.password.length < 7) {
    newErrors.password = "Password must be at least 8 characters long";
  }

  if (!formData.username || formData.username.length < 6) {
    newErrors.username = "Password must be at least 6 characters long";
  }
  setErrors(newErrors);
  return newErrors;
};