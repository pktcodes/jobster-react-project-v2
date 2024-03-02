import { configureStore } from '@reduxjs/toolkit';

import userState from './features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userState,
  },
});

export { store };
