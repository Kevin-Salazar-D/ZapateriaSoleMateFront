import { useEffect, useState } from "react";
import { Drawer, Box, Divider, IconButton } from "@mui/material";
import Logo from "../../../components/Logo";
import UserProfile from "../../../components/UserProfile";
import icon from "../../../constants/icons";
import { useSelector } from "react-redux";
import Navigator from "../../../components/Navigator";
import menuItems from "../../../constants/menuItems";

function DrawerAdmin({ onMinimize }) {
  const drawerWidth = useSelector((state) => state.configs.drawerWidth);
  const [localWidth, setLocalWidth] = useState(drawerWidth);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocalWidth(drawerWidth);
    }, 10); // Delay pequeño para activar transición

    return () => clearTimeout(timeout);
  }, [drawerWidth]);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true}
      sx={{
        width: localWidth,
        flexShrink: 0,
        transition: "width 0.3s ease-in-out",
        [`& .MuiDrawer-paper`]: {
          width: localWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e1e2f",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid #dfd9d9",
          transition: "width 0.3s ease-in-out",
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          px: localWidth === 250 ? 2 : 1,
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.3s ease-in-out",
          position: "relative",
        }}
      >
        {localWidth === 250 && <Logo title="SoleMate" />}

        <IconButton
          onClick={onMinimize}
          sx={{
            color: "#fff",
            position: "absolute",
            top: 8,
            right: 8,
            fontSize: 18,
          }}
        >
          <icon.menu />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "#444" }} />

      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          px: localWidth === 250 ? 2 : 1,
          py: 2,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Navigator
          menuItems={menuItems}
          orientation="vertical" // siempre vertical como pediste
        />
      </Box>

      <Box
        sx={{
          px: localWidth === 250 ? 2 : 1,
          py: 1,
          borderTop: "1px solid #444",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <UserProfile />
      </Box>
    </Drawer>
  );
}

export default DrawerAdmin;
