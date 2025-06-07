import { Link, useLocation, matchPath } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";

//ridux
import { useSelector } from "react-redux";

function NavItem({ item, isParents = false, setSelectID = null, level = 0 }) {
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
        color: isSelected ? "#fff" : "#bbb", // color más claro si está seleccionado
        minWidth: 36,
        transition: "color 0.3s",
      }}
    >
      <Icon />
    </ListItemIcon>
  ) : null;

  return (
    <Box>
      <ListItemButton
        component={Link}
        to={path}
        disabled={item.disabled}
        selected={isSelected}
        onClick={handleItemClick}
        sx={{
          pl: 2 + level * 2,
          color: isSelected ? "#fff" : "#ccc",
          backgroundColor: isSelected ? "rgba(255, 255, 255, 0.08)" : "inherit",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
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
        <ListItemText primary={widthDrawer === 250? item.title: ""} />
      </ListItemButton>
    </Box>
  );
}

export default NavItem;
