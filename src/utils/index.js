import authHeader from './authHeader';
import customFetch, { validateAuthorization } from './customFetch';
import links from './links';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from './localStorage';

export {
  addUserToLocalStorage,
  customFetch,
  getUserFromLocalStorage,
  links,
  removeUserFromLocalStorage,
  authHeader,
  validateAuthorization,
};
