import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countLoading: 0,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    changeIsLoading: (state, action) => {
      if (action.payload) {
        state.countLoading += 1;
      } else {
        state.countLoading = Math.max(0, state.countLoading - 1);
      }
    },
    resetLoading: (state) => {
      state.countLoading = 0;
    },
  },
});

export const { changeIsLoading, resetLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
