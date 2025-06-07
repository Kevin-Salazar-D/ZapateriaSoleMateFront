import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "Sin mensaje",
  icon: "error",

};

const alertReducer = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, action) => {
      state.open = action.payload.open;
      state.message = action.payload.message;
      state.icon = action.payload.icon;

    },
    closeAlert: (state) => {
      state.open = false;
    },
  },
});

export const { openAlert, closeAlert } = alertReducer.actions;
export const selectAlertState = (state) => state.alert;
export default alertReducer.reducer;
