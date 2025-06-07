import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import imageLogin from "../../assets/zapateria-login.webp";
import imageLoginR from "../../assets/img_login.png";

export default function AuthLayout() {
  return (
    <Fragment>
      <Box sx={{ minHeight: "100vh", width: "100%" }}>
        <Grid container sx={{ minHeight: "100vh" }}>
          {/* Mitad con Imagen de Fondo */}
          <Grid item xs={0} sm={6}>
            <Box
              sx={{
                backgroundImage: `url(${imageLogin})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                width: "100%",
              }}
            />
          </Grid>

          {/* Mitad Blanca */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${imageLoginR})`,
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: 400, lg: 475 },
                margin: { xs: 2.5, md: 3 },
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                p: { xs: 2, sm: 3, md: 4, xl: 5 },
                borderRadius: 3,
              }}
            >
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}
