// Crear el objeto para las rutas del menú del drawer
import icon from "./icons";
import routesPages from "./routes";

const menuItemsHeader = {
  items: [
    {
      id: "group-pages",
      type: "group",
      children: [
        {
          id: "Home",
          title: "Principal",
          type: "item",
          url: routesPages.getOperativeHome,
          icon: icon.home,
        },
        {
          id: "category",
          title: "Categoria",
          type: "item",
          url: routesPages.getOperativeCategory,
          icon: icon.category,
        },
        {
          id: "mark",
          title: "Marcas",
          type: "item",
          url: routesPages.getOperativeMark,
          icon: icon.branding,
        },
        {
          id: "store",
          title: "Tienda",
          type: "item",
          url: routesPages.getOperativeStore,
          icon: icon.store,
        },
      ],
    },
  ],
};

export default menuItemsHeader;
