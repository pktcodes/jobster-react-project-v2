import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { customFetch } from '../../utils';
import { logoutUser } from '../user/userSlice';

const initialState = {
  isLoading: false,
  jobs: [],
  numOfPages: null,
  totalJobs: null,
};

export const getAllJobs = createAsyncThunk(
  'allJobs/getAllJobs',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/jobs', {
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
      return thunkAPI.rejectWithValue(
        error.response.data.msg || 'There was an error'
      );
    }
  }
);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        const { jobs, numOfPages, totalJobs } = action.payload;
        state.isLoading = false;
        state.jobs = jobs;
        state.numOfPages = numOfPages;
        state.totalJobs = totalJobs;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default allJobsSlice.reducer;
