import React, { useState } from "react";
import { Drawer, Toolbar, Box } from "@mui/material";
import NavGroup from "./NavGroup";

//importancion de constantes
import menuItems from "../../../../constants/menuItems";

function Navigation() {
  // Estado para manejar el ID seleccionado
  const [selectedID, setSelectedID] = useState(null);

  const handleSelectID = (id) => {
    setSelectedID(id);
    console.log("Elemento seleccionado:", id);
  };

  return (
    <Box sx={{ overflow: "auto" }}>
      {menuItems.items.map((group, index) => (
        <NavGroup
          key={index}
          group={{
            title: group.id,
            items: group.children,
          }}
          setSelectID={handleSelectID}
        />
      ))}
    </Box>
  );
}

export default Navigation;
