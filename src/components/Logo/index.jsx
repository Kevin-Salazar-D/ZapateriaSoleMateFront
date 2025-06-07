import PropTypes from "prop-types";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import LogoAdmin from "../../assets/zapatoDraweAdmin.svg";

function Logo({ title }) {
  return (
    <ButtonBase
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        px: 2,
        py: 1.5,
      }}
    >

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src={LogoAdmin} alt="Logo" width="45" />
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: 1,
          }}
        >
          {title}
        </Typography>
      </div>



    </ButtonBase>
  );
}

Logo.propTypes = {
  title: PropTypes.string,
};

export default Logo;
