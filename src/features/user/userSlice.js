import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils';
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from './userThunk';

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return registerUserThunk('/auth/register', user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return loginUserThunk('/auth/login', user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return updateUserThunk('/auth/updateUser', user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.isLoading = false;
        addUserToLocalStorage(user);
        toast.success(`Welcome to Jobify, ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.isLoading = false;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back, ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.isLoading = false;
        addUserToLocalStorage(user);
        toast.success('Your profile has been updated!');
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
