import React from "react";
import { List, Typography } from "@mui/material";
import NavItem from "./NavItem";

function NavGroup({ group, setSelectID = null, orientation = "vertical" }) {
  if (!group || !group.items || group.items.length === 0) return null;

  return (
    <div
      style={{
        display: orientation === "horizontal" ? "inline-block" : "block",
        marginRight: orientation === "horizontal" ? 24 : 0,
      }}
    >
    

      <List
        disablePadding
        sx={{
          display: orientation === "horizontal" ? "flex" : "block",
          flexDirection: "row",
          gap: 2,
        }}
      >
        {group.items.map((item) => (
          <NavItem
            key={item.id || item.title}
            item={item}
            isParents={item.children && item.children.length > 0}
            setSelectID={setSelectID}
            level={1}
            orientation={orientation}
          />
        ))}
      </List>
    </div>
  );
}

export default NavGroup;
