/**
 * "Slice" comes from splitting up Redux state objects into multiple slices of state.
 * A slice is really a collection of reducer logic and actions for a single feature in the app.
 *
 * For example, a blog might have a slice for post and another slice for comments.
 * You will handle the logic of each differently so they have a slice.
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Note: 2 actions inside of our reducer
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
