const authHeader = (thunkAPI) => {
  return {
    headers: {
      Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
    },
  };
};

export default authHeader;
