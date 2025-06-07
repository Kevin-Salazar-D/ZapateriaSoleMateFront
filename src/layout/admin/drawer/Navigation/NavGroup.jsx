import React from "react";
import { List, Typography } from "@mui/material";
import NavItem from "./NavItem";

function NavGroup({ group, setSelectID = null }) {
  if (!group || !group.items || group.items.length === 0) return null;

  return (
    <div>
      <Typography
        variant="subtitle2"
        sx={{ pl: 2, pt: 2, color: "text.secondary" }}
      >
        {group.title}
      </Typography>

      <List disablePadding>
        {group.items.map((item) => (
          <NavItem
            key={item.id || item.title}
            item={item}
            isParents={item.children && item.children.length > 0}
            setSelectID={setSelectID}
            level={1}
          />
        ))}
      </List>
    </div>
  );
}

export default NavGroup;
