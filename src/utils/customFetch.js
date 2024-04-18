import axios from 'axios';

const rootURL = 'https://redux-toolkit-jobster-api-server.onrender.com/api/v1';

const customFetch = axios.create({
  baseURL: rootURL,
});

export default customFetch;
