import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "../../../components/Logo";
import UserProfile from "../../../components/UserProfile";

//THEMES
import themeColors from "../../../themes/colors"
function Header() {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: themeColors.neutral500,
      })}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo title="Sole Mate" />
        <UserProfile />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
