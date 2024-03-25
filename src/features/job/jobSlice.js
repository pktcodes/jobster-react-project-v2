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
});

export default jobSlice.reducer;
