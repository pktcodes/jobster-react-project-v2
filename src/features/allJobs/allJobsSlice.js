import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState: initialState,
});

export default allJobsSlice.reducer;
