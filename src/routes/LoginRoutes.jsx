import { lazy } from "react";

const LoginAuth = lazy(() => import("../pages/auth/Login"));
const CreateAccount = lazy(() => import("../pages/auth/CreateAccout")); // Corregido el nombre del archivo

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  children: [
    { path: "/", element: <LoginAuth /> },
    { path: "/login", element: <LoginAuth /> },
    { path: "/create_account", element: <CreateAccount /> }, // Corregida la ruta
  ],
};

export default LoginRoutes;
