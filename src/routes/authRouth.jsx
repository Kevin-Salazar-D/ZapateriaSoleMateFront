import { lazy, Suspense } from "react";
import Loadable from "../components/Loadable";

// Las dashboards de la aplicación
const DashboardAuht = Loadable(lazy(() => import("../pages/admin")));
const Dashboard = Loadable(lazy(() => import("../pages/admin/Dashboard")));
const DashboardComments = Loadable(lazy(() => import("../pages/admin/Comments")));
const DashboardUsers = Loadable(lazy(() => import("../pages/admin/Users")));

// Objetos que tienen la estructura de las rutas
const AuthRouth = {
  path: "/admin",
  children: [
    {
      path: "home",
      element: <DashboardAuht />,
    },
    {
      path: "Dashboard",
      element: <Dashboard />,
    },
    {
      path: "Comments",
      element: <DashboardComments />,
    },
    {
      path: "Users",
      element: <DashboardUsers />,
    },
  ],
};

export default AuthRouth;
