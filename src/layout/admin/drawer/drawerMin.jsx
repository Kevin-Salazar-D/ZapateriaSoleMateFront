import { useEffect, useState } from "react";
import { Drawer, Box, Divider, IconButton } from "@mui/material";
import Logo from "../../../components/Logo";
import Navigation from "../drawer/Navigation";
import Userprofile from "../../../components/UserProfile";
import icon from "../../../constants/icons";
import { useSelector } from "react-redux";

function DrawerMin({ onExpand }) {
  const drawerWidth = useSelector((state) => state.configs.drawerWidth);
  const [localWidth, setLocalWidth] = useState(drawerWidth);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocalWidth(drawerWidth);
    }, 10);

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
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          height: 64,
          px: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >

        <IconButton
          onClick={onExpand}
          sx={{
            color: "#fff",
            position: "absolute",
            top: 8,
            right: 8,
            fontSize: 18,
            padding: 1,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <icon.menuopen
            sx={{
              transition: "all 0.3s ease-in-out",
              transform: "rotate(0deg)",
              "&:hover": {
                transform: "rotate(180deg)",
              },
            }}
          />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "#444" }} />

      <Box
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          transition: "padding 0.3s ease-in-out",
        }}
      >
        <Navigation />
      </Box>

      <Box
        sx={{
          px: 1,
          py: 1,
          borderTop: "1px solid #444",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Userprofile />
      </Box>
    </Drawer>
  );
}

export default DrawerMin;
