import React, { useState } from "react";
import { Drawer, Box, Divider, IconButton } from "@mui/material";
import Logo from "../../../components/Logo";
import Navigation from "../drawer/Navigation";
import Simplebar from "../../../components/Simplebar";
import Userprofile from "../../../components/UserProfile";
import icon from "../../../constants/icons";

const drawerWidth = 250;

function DrawerAdmin() {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e1e2f",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid #dfd9d9",
        },
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo title="SoleMate" />
        <IconButton
          onClick={handleClose}
          sx={{
            color: "#fff",
            position: "absolute",
            top: 3,
            right: 3,
            fontSize: 15,
          }}
        >
          <icon.menuopen />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "#444" }} />

      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <Simplebar>
          <Navigation />
        </Simplebar>
      </Box>

      <Box sx={{ px: 2, py: 1, borderTop: "1px solid #444" }}>
        <Userprofile />
      </Box>
    </Drawer>
  );
}

export default DrawerAdmin;
