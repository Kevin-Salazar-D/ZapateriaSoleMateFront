//importacion general
import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import api from "../../constants/api.js";

//importacion de states
import { loginUser } from "../../store/auth";
import { openAlert } from "../../store/alert";
import { changeIsLoading } from "../../store/Loader/index.js";
// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";


// Componentes personalizados
import FlexInput from "../../components/FlexInput.jsx";
import FlexButton from "../../components/FlexButton.jsx";

//constantes
import icon from "../../constants/icons.js";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo válido")
    .matches(
      /^[a-zA-Z0-9@.]+$/,
      "No se aceptan caracteres especiales: *{}[]..."
    )
    .required("El correo es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

function Login() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      let isSuccess = false;
      let isMessage = "";

      try {
        dispatch(changeIsLoading(true));
        const response = await axios.post(api.loginUser, {
          email: values.email,
          password: values.password,
        });

        isSuccess = response.status === 200;
        isMessage = isSuccess
          ? "Ingresaste correctamente a la página"
          : "Credenciales incorrectas";

        if (isSuccess) {
          const { token, dataUser } = response.data;
          dispatch(loginUser({ jwt: token, dataUser }));
        }
      } catch (error) {
        const status = error.response?.status;
        isSuccess = false;

        isMessage =
          status === 401 ? "Credenciales incorrectas" : "Error en el servidor";

        setErrors({ error: isMessage });
      } finally {
        dispatch(
          openAlert({
            open: true,
            message: isMessage,
            icon: isSuccess ? "success" : "error",
          })
        );
        setSubmitting(false);
        dispatch(changeIsLoading(false));

      }
    },
  });

  return (
    <Box
      sx={{ borderRadius: 3, p: 3, maxWidth: 450, backgroundColor: "white" }}
    >
      <Typography variant="h5" gutterBottom>
        Iniciar Sesión
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <FlexInput
            sm={12}
            id="email"
            name="email"
            text="Correo Electrónico"
            label="Ingrese su correo electrónico"
            value={formik.values.email}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            startAdornment={<icon.people color="action" sx={{ mr: 1 }} />}
            errors={formik.errors.email}
            touched={formik.touched.email}
            isrequiered={true}
          />

          <FlexInput
            sm={12}
            id="password"
            name="password"
            text="Contraseña"
            label="Ingrese su contraseña"
            value={formik.values.password}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            startAdornment={<icon.security color="action" sx={{ mr: 1 }} />}
            errors={formik.errors.password}
            touched={formik.touched.password}
            isrequiered={true}
          />

          <FlexButton
            sm={12}
            typeButton="submit"
            variant="contained"
            startText="Ingresar"
            endText="Cargando..."
            sx={{ backgroundColor: "#DBAF91", color: "white" }}
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
          />

          <Grid item xs={12}>
            <Link
              variant="h6"
              component={RouterLink}
              to="/create_account"
              sx={{ color: "blue" }}
            >
              Crear tu cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Login;
