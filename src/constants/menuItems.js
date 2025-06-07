// Crear el objeto para las rutas del menú del drawer
import icon from "./icons";
import routesPages from "./routes";

const menuItems = {
  items: [
    {
      id: "group-pages",
      type: "group",
      children: [
        {
          id: "Home",
          title: "Principal",
          type: "item",
          url: routesPages.getAdminHome,
          icon: icon.home,
        },
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: routesPages.getAdminDashboard,
          icon: icon.dashboard,
        },
        {
          id: "comments",
          title: "Comentarios",
          type: "item",
          url: routesPages.getAdminComments,
          icon: icon.comments,
        },
        {
          id: "users",
          title: "Usuarios",
          type: "item",
          url: routesPages.getAdminUsers,
          icon: icon.people,
        },
      ],
    },
  ],
};

export default menuItems;
