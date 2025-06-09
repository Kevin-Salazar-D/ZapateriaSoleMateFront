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

  // Colores configurables
  const listItemIconColor = orientation === "horizontal"
    ? isSelected ? "rgb(0, 0, 0)" : "rgb(0, 0, 0)"
    : isSelected ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)";

  const listItemTextColor = orientation === "horizontal"
    ? isSelected ? "rgb(0, 0, 0)" : "rgb(0, 0, 0)"
    : isSelected ? "rgb(255, 255, 255)" : "#8e8e8e";

  const backgroundColor = isSelected
    ? (orientation === "horizontal" ? "rgb(0, 0, 0)" : "rgb(0, 0, 0)")
    : "inherit";

 const hoverBackgroundColor = orientation === "horizontal"
  ? "#DBAF91"
  : "rgba(165, 165, 165, 0.2)"; // color más transparente


  const itemIcon = Icon ? (
    <ListItemIcon
      sx={{
        color: listItemIconColor,
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
      selected={isSelected}
      onClick={handleItemClick}
      sx={{
        pl: orientation === "vertical" ? 2 + level * 2 : 1,
        pr: orientation === "horizontal" ? 2 : undefined,
        color: listItemTextColor,
        backgroundColor: backgroundColor,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "&:hover": {
          backgroundColor: hoverBackgroundColor,
          color: "rgb(255, 255, 255)",
          "& .MuiListItemIcon-root": {
            color: "rgb(255, 255, 255)",
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
