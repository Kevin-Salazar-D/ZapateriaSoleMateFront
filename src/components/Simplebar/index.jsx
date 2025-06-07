import PropTypes from "prop-types";

// material-ui
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import SimpleBar from "simplebar-react";
import { BrowserView, MobileView } from "react-device-detect";

import "simplebar-react/dist/simplebar.min.css";

// scroll bar wrapper
const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      background: alpha("#1976d2", 0.7), // Azul con transparencia
    },
    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
}));


// ==============================|| SIMPLE SCROLL BAR ||============================== //

export default function Simplebar({ children, sx, ...other }) {
  return (
    <>
      <BrowserView>
        <Box sx={{ flexGrow: 1, height: "100%", overflow: "hidden" }}>
          <SimpleBarStyle clickOnTrack={false} sx={sx} {...other}>
            {children}
          </SimpleBarStyle>
        </Box>
      </BrowserView>
      <MobileView>
        <Box sx={{ overflowX: "auto", ...sx }} {...other}>
          {children}
        </Box>
      </MobileView>
    </>
  );
}

Simplebar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
