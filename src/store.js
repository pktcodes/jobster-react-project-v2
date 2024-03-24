import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';
import jobReducer from './features/job/jobSlice';

const store = configureStore({
  reducer: {
    userState: userReducer,
    sidebarState: sidebarReducer,
    jobState: jobReducer,
  },
});

export { store };
