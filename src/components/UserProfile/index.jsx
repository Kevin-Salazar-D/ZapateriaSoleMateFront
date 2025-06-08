import { useState } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Material UI
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

// Constantes
import icon from "../../constants/icons";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { resetAuthState } from "../../store/auth";

// Rutas
import routesPages from "../../constants/routes";

function UserProfile() {
  const { dataUser } = useSelector((state) => state.auth);
  const widthDrawer = useSelector((state) => state.configs.drawerWidth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAdmin = dataUser.rol === "admin";
  const IconMenu = isAdmin ? icon.moreVert : icon.arrowDown;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(resetAuthState());
    navigate(routesPages.login, { replace: true });
  };

  const handleConfigUser = () => {
    navigate(routesPages.getOperativeFeedback);
  };

  const renderAdminMenuButton = () => (
    <IconButton edge="end" onClick={handleClick}>
      <IconMenu
        sx={{
          color: "white",
          fontSize: 24,
          mr: widthDrawer === 80 ? -2 : 0,
        }}
      />
    </IconButton>
  );

  const getInitials = (name) => {
    if (!name) return "?";
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const userInitials = getInitials(dataUser?.name);

  return (
    <Box
      sx={
        isAdmin
          ? { borderTop: "2px solid", borderTopColor: "divider", mt: 2 }
          : { mt: 1, width: 50, display: "flex", alignItems: "center" }
      }
    >
      <ListItem
        disablePadding
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
        secondaryAction={isAdmin && renderAdminMenuButton()}
      >
        <ListItemAvatar>
          <Avatar
            onClick={handleClick}
            sx={{
              cursor: "pointer",
              bgcolor: isAdmin ? "#3949ab" : "#1976d2",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {userInitials}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            widthDrawer === 250 && isAdmin
              ? dataUser?.name || "Usuario"
              : ""
          }
          secondary={
            widthDrawer === 250 && isAdmin
              ? dataUser?.email || "Correo no disponible"
              : ""
          }
          secondaryTypographyProps={{ color: isAdmin ? "white" : "black" }}
        />
      </ListItem>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "user-menu-button" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <icon.logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cerrar sesión</ListItemText>
        </MenuItem>
        {!isAdmin && (
          <MenuItem onClick={handleConfigUser}>
            <ListItemIcon>
              <icon.setting fontSize="small" />
            </ListItemIcon>
            Cuenta de Usuario
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
}

export default UserProfile;
