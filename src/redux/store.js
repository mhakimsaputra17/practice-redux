import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import todosReducer from "./slices/todosSlice"

// configureStore otomatis mengonfigurasi store dengan pengaturan terbaik
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Mendaftarkan counter reducer ke store
    todos: todosReducer,
  },
});
