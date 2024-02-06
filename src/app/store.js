import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice"; // it import by default reducers from totoSlice

export const store = configureStore({
  reducer: todoReducer,
});
