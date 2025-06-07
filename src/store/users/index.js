import { createSlice, createAction } from "@reduxjs/toolkit";
export const fetchGetUsers = createAction("users/fetchGetUsers");


const initialState = {
  users: {
    id: "",
    info: {
      alias: "",
      createdAt: "",
      email: "",
      name: "",
      rol: "",
    },
  },
  dtUsers: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserID: (state, action) => {
      state.users.id = action.payload.id;
    },
    setUsersInfo: (state, action) => {
      state.users.info.alias = action.payload.alias ?? "";
      state.users.info.createdAt = action.payload.createdAt ?? "";
      state.users.info.email = action.payload.email ?? "";
      state.users.info.name = action.payload.name ?? "";
      state.users.info.rol = action.payload.rol ?? "";
    },
    setAllUsers: (state, action) => {

      state.dtUsers = action.payload;
    },
  },
});

// Exportar acciones y selector
export const { setUserID, setUsersInfo, setAllUsers } = userSlice.actions;
export const selectUsersState = (state) => state.users;
export default userSlice.reducer;
