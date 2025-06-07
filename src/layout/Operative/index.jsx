import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Toolbar } from "@mui/material";
import Header from "./header"; // -> tu nuevo Header


export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Header fija el menú arriba */}
      <Header />

      {/* Este Toolbar empuja el contenido bajo el AppBar */}
      <Toolbar />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 0, sm: 2 },
            position: "relative",
            minHeight: "calc(100vh - 110px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
