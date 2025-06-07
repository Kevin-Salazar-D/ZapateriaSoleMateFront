import { lazy, Suspense } from "react";
import Loadable from "../components/Loadable";

// Las dashboards de la aplicación
const DashboardHome = Loadable( lazy(() => import("../pages/Operative/home")));
const DashboardFeddback = Loadable(lazy(()=> import("../pages/Operative/feedback")))

// Objetos que tienen la estructura de las rutas
const OperativeRoutes = {
  path: "/operative",
  children: [
    {
      path: "home",
      element: <DashboardHome />,
    },
    {
      path: "feedback",
      element: <DashboardFeddback />,
    },
  ],
};

export default OperativeRoutes;
