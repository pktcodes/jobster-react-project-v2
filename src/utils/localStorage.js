const addUserToLocalStorage = (user) => {
  return localStorage.setItem('user', JSON.stringify(user));
};

const removeUserFromLocalStorage = () => {
  return localStorage.removeItem('user');
};

const getUserFromLocalStorage = () => {
  const localStorageUser = localStorage.getItem('user');
  const user = localStorageUser ? JSON.parse(localStorageUser) : null;
  return user;
};

export {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
};
