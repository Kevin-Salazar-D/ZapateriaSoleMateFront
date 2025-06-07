import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert, selectAlertState } from "../store/alert";
import { Slide } from "@mui/material";

const IconComponent = {
  success: CheckCircleOutlineIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

const ColorIcon = {
  success: "#25c418",
  warning: "#f1b20b",
  error: "#dc1e0e",
};

function Alert() {
  const dispatch = useDispatch();
  const { open, message, icon } = useSelector(selectAlertState);
  const Icon = IconComponent[icon] || ErrorIcon;
  const colorIcon = ColorIcon[icon];

  const handleClose = () => {
    dispatch(closeAlert());
  };


  useEffect(() => {
    if (open) {
      const timer = setTimeout(handleClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <Box
        component={Paper}
        sx={{
          position: "fixed",
          bottom: "88vh",
          right: 20,
          maxWidth: "60%",
          minWidth: "250px",
          background: "#f1f1f1",
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: "12px",
          borderRadius: "8px",
          zIndex: 1000000,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            background: colorIcon,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon sx={{ color: "white", fontSize: 24 }} />
        </Box>

        <Typography
          sx={{
            wordBreak: "break-word",
            whiteSpace: "normal",
            flex: 1,
            fontSize: 14
          }}
        >
          {message}
        </Typography>
      </Box>
    </Slide>
  );
}

export default Alert;
