import { createSlice } from "@reduxjs/toolkit";
import routesPages from "../../constants/routes";

const rolUser = {
  user: routesPages.getOperativeHome,
  admin: routesPages.getAdminHome,
};

// Inicializar el estado con los datos cargados de localStorage
const initialState = {
  id: "",
  isAuthenticated: false,
  jwt: "",
  defaultPath: "/",
  dataUser: {
    name: "",
    alias: "",
    email: "",
    password: "",
    rol: "noUser",
  },
  expirationTime: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.id = action.payload.id;
      state.isAuthenticated = true;
      state.jwt = action.payload.jwt;
      state.dataUser = action.payload.dataUser;
      state.defaultPath = rolUser[action.payload.dataUser.rol];

      const expirationTime = Date.now() + 60 * 60 * 1000; // Sesión de 1 hora
      state.expirationTime = expirationTime;
    },
    resetAuthState: (state) => {
      // Limpiar el estado de la autenticación
      state.id = "";
      state.isAuthenticated = false;
      state.jwt = "";
      state.defaultPath = "/";
      state.dataUser = {
        name: "",
        alias: "",
        email: "",
        password: "",
        rol: "noUser",
      };
      state.expirationTime = null;

      // Limpiar cookies
      document.cookie.split(";").forEach((cookie) => {
        const [name] = cookie.split("=");
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });

      // Limpiar almacenamiento local y sesión
      localStorage.clear();
      sessionStorage.clear();
    },
  },
});

export const { loginUser, resetAuthState } = authReducer.actions;
export const selectAuthState = (state) => state.auth;

export default authReducer.reducer;
