import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";
import tenisNike from "../assets/tenisNike.svg";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
//ridux


const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

function Loader() {
      const countLoading = useSelector((state) => state.loader.countLoading);

      if (countLoading === 0) return null;
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2001,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 150,
          height: 150,
        }}
      >
        <CircularProgress
          size={150}
          thickness={1}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            // Aplica el stroke al círculo interno
            "& .MuiCircularProgress-circle": {
              stroke: "#ED7161",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={tenisNike}
            alt="loading"
            sx={{
              width: 80,
              height: 80,
              animation: `${spin} 1.5s linear infinite`,
              transformOrigin: "center center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Loader;
