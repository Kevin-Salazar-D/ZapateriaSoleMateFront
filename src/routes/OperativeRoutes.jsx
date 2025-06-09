import { lazy, Suspense } from "react";
import Loadable from "../components/Loadable";


// Las dashboards de la aplicación
const DashboardHome = Loadable( lazy(() => import("../pages/Operative/home")));
const DashboardFeddback = Loadable(lazy(()=> import("../pages/Operative/feedback")));
const DashboardCategory = Loadable(lazy(()=> import("../pages/Operative/category")));
const DashboardMarket = Loadable(lazy(()=> import("../pages/Operative/market")));
const DashboardStore = Loadable(lazy(()=> import("../pages/Operative/storePage")));


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
    {
      path: "category",
      element: <DashboardCategory />,
    },
    {
      path: "market",
      element: <DashboardMarket />,
    },
    {
      path: "store",
      element: <DashboardStore />,
    },
  ],
};

export default OperativeRoutes;
