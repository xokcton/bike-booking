import { configureStore } from '@reduxjs/toolkit';
import { bicycle } from './features';

const store = configureStore({
  reducer: {
    bicycle,
  },
});

export default store;
