import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  status: 'pending',
  statusOptions: ['interview', 'declined', 'pending'],
  jobType: 'full-time',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  isEditing: false,
};

const jobSlice = createSlice({
  name: 'job',
  initialState: initialState,
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateInput } = jobSlice.actions;

export default jobSlice.reducer;
