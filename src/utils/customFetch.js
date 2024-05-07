import axios from 'axios';

import { getUserFromLocalStorage } from './localStorage';
import { clearStore } from '../features/user/userSlice';

const rootURL = 'https://redux-toolkit-jobster-api-server.onrender.com/api/v1';

const customFetch = axios.create({
  baseURL: rootURL,
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const validateAuthorization = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue('Unauthorized! Logging out...');
  }
  return thunkAPI.rejectWithValue(
    error.response.data.msg || 'There was an error'
  );
};

export default customFetch;
