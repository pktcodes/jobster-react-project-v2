import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { customFetch, validateAuthorization } from '../../utils';

const initialState = {
  isLoading: false,
  stats: {},
  monthlyApplications: [],
};

export const getStats = createAsyncThunk(
  'stats/getStats',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/jobs/stats');
      return response.data;
    } catch (error) {
      return validateAuthorization(error, thunkAPI);
    }
  }
);

const statsSlice = createSlice({
  name: 'stats',
  initialState: initialState,
  reducers: {
    clearStatsState: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        const { defaultStats, monthlyApplications } = action.payload;
        state.isLoading = false;
        state.stats = defaultStats;
        state.monthlyApplications = monthlyApplications;
      })
      .addCase(getStats.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { clearStatsState } = statsSlice.actions;

export default statsSlice.reducer;
