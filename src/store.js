import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';
import jobReducer from './features/job/jobSlice';
import allJobsReducer from './features/allJobs/allJobsSlice';

const store = configureStore({
  reducer: {
    userState: userReducer,
    sidebarState: sidebarReducer,
    jobState: jobReducer,
    allJobsState: allJobsReducer,
  },
});

export { store };
