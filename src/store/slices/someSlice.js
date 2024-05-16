// src/store/slices/someSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = someSlice.actions;
export default someSlice.reducer;
