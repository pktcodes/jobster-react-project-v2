import { customFetch } from '../../utils';
import { logoutUser } from './userSlice';

const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user);
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.patch(url, user, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized! Logging out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export { loginUserThunk, registerUserThunk, updateUserThunk };
