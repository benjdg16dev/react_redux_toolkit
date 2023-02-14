/**
 * Redux store and Redux are sometimes used interchangeably.
 * Both stand for a container for JavaScript apps.
 * And it stores the whole state of the app in an immutable Object tree.
 * The intended pattern for Redux is to have a single store for an application.
 */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
