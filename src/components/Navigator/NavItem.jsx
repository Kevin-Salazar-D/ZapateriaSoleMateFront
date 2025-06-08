import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useSelector } from "react-redux";

function NavItem({ item, isParents = false, setSelectID = null, level = 0, orientation = "vertical" }) {
  const location = useLocation();
  const path = item.url || item.link;
  const isSelected = !!matchPath({ path, end: false }, location.pathname);
  const widthDrawer = useSelector((state) => state.configs.drawerWidth);

  const handleItemClick = () => {
    if (isParents && setSelectID) {
      setSelectID(item.id);
    }
  };

  const Icon = item.icon;
  const itemIcon = Icon ? (
    <ListItemIcon
      sx={{
        color: isSelected ? "#fff" : "#8e8e8e",
        minWidth: 36,
        transition: "color 0.3s",
      }}
    >
      <Icon />
    </ListItemIcon>
  ) : null;

  return (
    <ListItemButton
      component={Link}
      to={path}
      disabled={item.disabled}
      selected={isSelected}
      onClick={handleItemClick}
      sx={{
        pl: orientation === "vertical" ? 2 + level * 2 : 1,
        pr: orientation === "horizontal" ? 2 : undefined,
        color: isSelected ? "#fff" : "#8e8e8e",
        backgroundColor: isSelected ? "rgba(255, 255, 255, 0.08)" : "inherit",
        display: orientation === "horizontal" ? "flex" : undefined,
        flexDirection: orientation === "horizontal" ? "row" : "row",
        alignItems: "center",
        "&:hover": {
          backgroundColor:  orientation === "horizontal"? "#DBAF91": "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          "& .MuiListItemIcon-root": {
            color: "#fff",
          },
        },
        transition: "background-color 0.3s, color 0.3s",
        zIndex: 1201,
      }}
    >
      {itemIcon}
      <ListItemText primary={widthDrawer === 250 ? item.title : ""} />
    </ListItemButton>
  );
}

export default NavItem;