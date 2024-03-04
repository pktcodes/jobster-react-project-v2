import axios from 'axios';

const rootURL = 'https://jobify-prod.herokuapp.com/api/v1/toolkit';

const customFetch = axios.create({
  baseURL: rootURL,
});

export { customFetch };
