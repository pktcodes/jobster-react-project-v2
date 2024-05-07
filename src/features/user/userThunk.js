import { customFetch, validateAuthorization } from '../../utils';
import { clearJobsState } from '../allJobs/allJobsSlice';
import { clearJobState } from '../job/jobSlice';
import { clearStatsState } from '../stats/statsSlice';
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
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.patch(url, user);
    return response.data;
  } catch (error) {
    return validateAuthorization(error, thunkAPI);
  }
};

const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearJobsState());
    thunkAPI.dispatch(clearJobState());
    thunkAPI.dispatch(clearStatsState());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

export { clearStoreThunk, loginUserThunk, registerUserThunk, updateUserThunk };
