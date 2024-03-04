import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const rootURL = `https://jobify-prod.herokuapp.com/api/v1/toolkit`;

const postRequestRoute = 'auth/register';

const endpoint = `${rootURL}${postRequestRoute}`;

console.log(endpoint);

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return console.log(`Register User: ${JSON.stringify(user)}`);
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  (user, thunkAPI) => {
    return console.log(`Login User : ${JSON.stringify(user)}`);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
});

export default userSlice.reducer;
