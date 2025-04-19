import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

// configureStore otomatis mengonfigurasi store dengan pengaturan terbaik
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Mendaftarkan counter reducer ke store
  },
});
