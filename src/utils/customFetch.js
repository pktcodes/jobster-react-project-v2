import axios from 'axios';

import { getUserFromLocalStorage } from './localStorage';

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

export default customFetch;
