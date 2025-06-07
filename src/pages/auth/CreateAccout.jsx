//importaciones generales
import React from "react";
import { useFormik } from "formik";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { openAlert } from "../../store/alert/index.js";
import api from "../../constants/api.js";

//importacion de ridux
import { changeIsLoading } from "../../store/Loader/index.js";

// Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

// Componentes personalizados
import FlexButton from "../../components/FlexButton.jsx";
import FlexInput from "../../components/FlexInput.jsx";
//constantes
import icon from "../../constants/icons.js";

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Ingrese elementos válidos")
    .required("El nombre es requerido"),
  user: Yup.string()
    .typeError("Ingrese tu nombre de usuario")
    .required("El usuario es obligatorio"),
  email: Yup.string()
    .typeError("Ingrese el email correctamente")
    .email("El email es necesario")
    .required("El correo es obligatorio"),
  password: Yup.string()
    .typeError("Ingrese elementos válidos")
    .required("Es obligatoria la contraseña"),
});

function CreateAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
     name: "",
     user: "",
     email: "",
     password: "",
   };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      let isSuccess = false;
      let isMessage = "";

      try {
        dispatch(changeIsLoading(true))
        const response = await axios.post(api.createUser, {
          name: values.name,
          alias: values.user,
          email: values.email,
          password: values.password,
          rol: "user",
        });

        isSuccess = response.status === 201;
        isMessage = isSuccess
          ? "Usuario creado correctamente"
          : "Error al crear usuario";

          if(isSuccess){

            setTimeout(()=>{
               navigate("/login");
               formik.resetForm();
            },2000)

          }


        setStatus({ success: isSuccess });
      } catch (error) {
        console.error("Error en la solicitud:", error.message);
        isSuccess = false;
        isMessage = "Error al crear usuario";
        setErrors({ submit: error.message });
        setStatus({ success: false });
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
        Crear cuenta
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <FlexInput
            sm={12}
            id="user"
            name="user"
            text="Nombre Usuario"
            label="Ingresa su nombre de usuario"
            value={formik.values.user}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            startAdornment={<icon.people color="action" sx={{ mr: 1 }} />}
            errors={formik.errors.user}
            touched={formik.touched.user}
            isrequiered={true}
          />

          <FlexInput
            sm={12}
            id="name"
            name="name"
            text="Nombre"
            label="Ingresa tu nombre"
            value={formik.values.name}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            startAdornment={<icon.person color="action" sx={{ mr: 1 }} />}
            errors={formik.errors.name}
            touched={formik.touched.name}
            isrequiered={true}
          />

          <FlexInput
            sm={12}
            id="email"
            name="email"
            text="Correo Electrónico"
            label="Ingresa tu correo electrónico"
            value={formik.values.email}
            onchange={formik.handleChange}
            onBlur={formik.handleBlur}
            startAdornment={<icon.email color="action" sx={{ mr: 1 }} />}
            errors={formik.errors.email}
            touched={formik.touched.email}
            isrequiered={true}
          />

          <FlexInput
            sm={12}
            id="password"
            name="password"
            text="Contraseña"
            label="Ingresa tu contraseña"
            typeInput="password"
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
            startText="Crear Usuario"
            endText="Cargando..."
            sx={{ backgroundColor: "#DBAF91", color: "white" }}
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
          />

          <Grid item xs={12}>
            <Link
              variant="h6"
              component={RouterLink}
              to="/Login"
              sx={{ color: "blue" }}
            >
              Regresar al login
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default CreateAccount;
