import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getAllJobsThunk } from './allJobsThunk';

const initialFiltersState = {
  search: '',
  status: 'all',
  statusOptions: ['all', 'interview', 'declined', 'pending'],
  jobType: 'all',
  jobTypeOptions: ['all', 'full-time', 'part-time', 'remote', 'internship'],
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  jobs: [],
  numOfPages: 0,
  totalJobs: 0,
  page: 1,
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk(
  'allJobs/getAllJobs',
  getAllJobsThunk
);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState: initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    updateInput: (state, action) => {
      const { name, value } = action.payload;
      state.page = 1;
      state[name] = value;
    },
    clearInputs: (state) => {
      return { ...state, ...initialFiltersState };
    },
    updatePage: (state, action) => {
      const pageNumber = action.payload;
      state.page = pageNumber;
    },
  },
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

export const {
  showLoading,
  hideLoading,
  updateInput,
  clearInputs,
  updatePage,
} = allJobsSlice.actions;

export default allJobsSlice.reducer;
