import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  stats: '',
  monthlyApplications: [],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState: initialState,
});

export default statsSlice.reducer;
