import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerWidth: 250, // nombre en camelCase
};

const configsSlice = createSlice({
  name: "configs", // corregido: antes decía "confings"
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawerWidth = state.drawerWidth === 250 ? 80 : 250;
    },
    setDrawerWidth: (state, action) => {
      state.drawerWidth = action.payload; // corregido: usabas state.width
    },
  },
});

export const { toggleDrawer, setDrawerWidth } = configsSlice.actions;
export default configsSlice.reducer;
