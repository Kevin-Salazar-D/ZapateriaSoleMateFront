import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import DrawerContainer from "./drawer/drawer";

function AdminLayout() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <DrawerContainer />
      <Box
        component="main"
        sx={{ width: "calc(100% - 260px)", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar sx={{ mt: -10 }} />
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 0, sm: 2 },
            position: "relative",
            minHeight: "calc(100vh - 110px)", // Asegura que el contenido ocupe todo el alto de la pantalla
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Renderiza los componentes hijos aquí */}
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default AdminLayout;
