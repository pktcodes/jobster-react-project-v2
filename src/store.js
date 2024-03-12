import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';

const store = configureStore({
  reducer: {
    userState: userReducer,
    sidebarState: sidebarReducer,
  },
});

export { store };
