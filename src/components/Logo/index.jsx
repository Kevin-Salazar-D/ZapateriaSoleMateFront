import PropTypes from "prop-types";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import LogoAdmin from "../../assets/logoSolMate.png";

function Logo({ title, showTitle = true, logoSize = 60 }) {
  return (
    <ButtonBase
      disableRipple
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        px: 2,
        py: 1.5,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <img
          src={LogoAdmin}
          alt="Logo"
          style={{
            width: logoSize,
            height: "auto",
            transition: "width 0.3s ease-in-out",
          }}
        />
        {showTitle && (
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: 1,
              transition: "opacity 0.3s ease-in-out",
              opacity: showTitle ? 1 : 0,
            }}
          >
            {title}
          </Typography>
        )}
      </div>
    </ButtonBase>
  );
}



export default Logo;
