// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import someSlice from './slices/someSlice';

export const store = configureStore({
  reducer: {
    some: someSlice,
  },
});
