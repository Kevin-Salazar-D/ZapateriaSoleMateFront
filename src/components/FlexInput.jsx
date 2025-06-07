import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import { red } from "@mui/material/colors";
import  FormHelperText  from "@mui/material/FormHelperText";

function FlexInput({
  id,
  name,
  sm,
  text,
  label,
  value,
  onchange,
  onBlur,
  isrequiered,
  disable,
  rows,
  typeInput,
  touched,
  errors,
  startAdornment,
  endAdornment,
}) {
  return (
    <Grid item xs={12} sm={sm ?? 12}>
      <Stack spacing={1}>
        <Typography>
          {text}
          {isrequiered && <span style={{ color: red[500] }}>*</span>}
        </Typography>
        <TextField
          fullWidth
          disabled={disable}
          id={id}
          rows={rows ?? 1}
          multiline
          type={typeInput}
          name={name}
          value={value || ""}
          onChange={(e) => onchange(e, e.target.value)}
          placeholder={label}
          onBlur={
            onBlur ? (e) => onBlur(e.target.value, e.target.id) : undefined
          }
          InputProps={{ startAdornment, endAdornment }}
        />
      </Stack>
      {touched && errors && (
        <FormHelperText error id={id + "-helper"}>
          {errors}
        </FormHelperText>
      )}
    </Grid>
  );
}

export default FlexInput;
