import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter", // nama slice
  initialState: {
    value: 0, // state awal
  },

  // Reducers berisi fungsi yang akan mengubah state
  reducers: {
    increment: (state) => {
      // Redux Toolkit memungkinkan kita menulis "mutating" logic karena
      // menggunakan library Immer di balik layar
      // yang mengubah mutasi menjadi pembaruan yang tidak dapat diubah.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      // Action.payload adalah data yang dikirim saat dispatch action
      state.value += action.payload;
    },
  },
});

//  Export actions untuk digunakan di komponen
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Export reducer untuk digunakan di store
export default counterSlice.reducer;
