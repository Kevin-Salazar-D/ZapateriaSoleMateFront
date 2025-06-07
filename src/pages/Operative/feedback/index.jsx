import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Api
import api from "../../../constants/api";

// Formik
import { useFormik } from "formik";
// Yup
import * as Yup from "yup";

// Componentes personalizados
import FlexInput from "../../../components/FlexInput";
import FlexButton from "../../../components/FlexButton";

// Importación de states
import { changeIsLoading } from "../../../store/Loader";
import { openAlert } from "../../../store/alert";

// ⚠️ NUEVO: Importar la acción saga
import { fetchGetWalletID } from "../../../store/wallet";

const validationSchema = Yup.object().shape({
  comment: Yup.string().required("No puedes dejar el campo vacío"),
});

function Feedback() {
  const dispatch = useDispatch();
  const { dataUser, jwt } = useSelector((state) => state.auth);
  const wallet = useSelector((state) => state.wallet.wallet); // Obtenemos la cartera

  // ⚠️ NUEVO: Disparamos el saga al montar el componente
  useEffect(() => {
    if (dataUser?.id) {
      dispatch(fetchGetWalletID(dataUser.id));
    }
  }, [dataUser?.id]);

  const formik = useFormik({
    initialValues: { comment: "" },
    validationSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      let message = "";
      let isSuccess = false;
      try {
        dispatch(changeIsLoading(true));

        const response = await axios.post(
          api.createComments,
          {
            emailUser: dataUser.email,
            name: dataUser.name,
            alias: dataUser.alias,
            texto: values.comment,
            userID: wallet.info.userID,
          },
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        isSuccess = response.status === 201;
        message = isSuccess
          ? "Comentario enviado correctamente"
          : "Error, no se pudo enviar tu comentario";
      } catch (error) {
        const status = error.response?.status;
        isSuccess = false;

        message =
          status === 400
            ? "No se encontraron comentarios"
            : "Falla del servidor";
      } finally {
        dispatch(changeIsLoading(false));
        dispatch(
          openAlert({
            open: true,
            message: message,
            icon: isSuccess ? "success" : "error",
          })
        );
        resetForm();
        setSubmitting(false);
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Quejas y comentarios
      </Typography>

      <Typography variant="body1">
        Nos interesan tus comentarios y sugerencias. Puedes mandarnos mensajes
        por dudas y observaciones que tengas.
      </Typography>

      {/* Mostramos los créditos del usuario desde su cartera */}
      {wallet?.info?.balance !== undefined && (
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
          Créditos disponibles: {wallet.info.balance}{" "}
          {wallet.info.currency || ""}
        </Typography>
      )}

      <FlexInput
        sm={12}
        id="comment"
        name="comment"
        value={formik.values.comment}
        text="Ingresa tu comentario"
        label="Comentario"
        onchange={formik.handleChange}
        onBlur={formik.handleBlur}
        isRequired={true}
        rows={6}
        errors={formik.errors.comment}
        touched={formik.touched.comment}
      />

      <FlexButton
        sm={12}
        typeButton="submit"
        variant="contained"
        startText="Enviar"
        endText="Cargando..."
        sx={{ backgroundColor: "#DBAF91", color: "white" }}
        disabled={formik.isSubmitting}
        loading={formik.isSubmitting}
      />
    </Box>
  );
}

export default Feedback;
