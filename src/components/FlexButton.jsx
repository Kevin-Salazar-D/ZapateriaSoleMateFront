import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function FlexButton({
  sm,
  sx,
  disabled,
  typeButton,
  startText,
  endText,
  varientButton,
  loading,
  onClick,
}) {
  return (
    <Grid item xs={12} sm={sm ?? 12}>
      <Stack spacing={1}>
        <Button
          fullWidth
          disabled={disabled}
          type={typeButton}
          sx={sx}
          variant={varientButton}
          onClick={onClick}
        >
          {loading ? endText : startText}
        </Button>
      </Stack>
    </Grid>
  );
}

export default FlexButton;
