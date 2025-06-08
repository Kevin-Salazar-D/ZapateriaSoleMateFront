import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "../../../components/Logo";
import UserProfile from "../../../components/UserProfile";
import icon from "../../../constants/icons";
import menuItemsHeader from "../../../constants/menuItemsHeader";

// THEMES
import themeColors from "../../../themes/colors";
import Navigator from "../../../components/Navigator";

function Header() {
  const SearchIcon = icon.search;
  const ShoppingCartIcon = icon.shoppingCart;

  return (
    <AppBar
  position="fixed"
  elevation={0}
  sx={{
    zIndex: (theme) => theme.zIndex.drawer + 1,
    backgroundColor: "white",
    boxShadow: "none",
    width: "100%",
  }}
>
  <Toolbar
    disableGutters
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 64,
      px: 2,
    }}
  >
    {/* Logo a la izquierda */}
    <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      <Logo title="SolMate" />
    </Box>

    {/* Menú en el centro */}
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2, // un poco de padding opcional
      }}
    >
      <Navigator
        menuItems={menuItemsHeader}
        orientation="horizontal"
        sx={{
          maxWidth: "600px", 
          width: "100%",
        }}
      />
    </Box>

    {/* Iconos y perfil completamente a la derecha */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexShrink: 0,
      }}
    >
      <SearchIcon sx={{ color: "black", cursor: "pointer" }} />
      <ShoppingCartIcon sx={{ color: "black", cursor: "pointer" }} />
      <UserProfile />
    </Box>
  </Toolbar>
</AppBar>

  );
}

export default Header;
