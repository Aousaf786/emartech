export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user && user !== "undefined" ? JSON.parse(user) : null;
};

export const setUserInLocalStorage = (user: any) => {
  localStorage.setItem("user", user ? JSON.stringify(user) : "undefined");
};
export const getFormData = (object: any) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (Array.isArray(value)) {
      // Handle arrays
      value.forEach((item: any) => {
        formData.append(key, item);
      });
    } else {
      // Handle non-array values
      formData.append(key, value);
    }
  });
  return formData;
};
