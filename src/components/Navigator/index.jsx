import React, { useState } from "react";
import { Box } from "@mui/material";
import NavGroup from "./NavGroup";

function Navigator({ menuItems, orientation = "vertical" }) {
  const [selectedID, setSelectedID] = useState(null);

  const handleSelectID = (id) => {
    setSelectedID(id);
    console.log("Elemento seleccionado:", id);
  };

  return (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
        gap: 2,
      }}
    >
      {menuItems.items.map((group, index) => (
        <NavGroup
          key={index}
          group={{
            title: group.id,
            items: group.children,
          }}
          setSelectID={handleSelectID}
          selectedID={selectedID}
           orientation={orientation}
        />
      ))}
    </Box>
  );
}

export default Navigator;
