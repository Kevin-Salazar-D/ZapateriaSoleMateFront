import React, { useState, useEffect } from "react";
import axios from "axios";
// Material UI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectWalletState, closeModal } from "../../store/wallet";
import { changeIsLoading } from "../../store/Loader";
import { selectAuthState } from "../../store/auth"; // Ajusta la ruta según tu estructura
import api from "../../constants/api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalWallet() {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet.wallet);
  const { jwt } = useSelector(selectAuthState);

  const { info } = wallet;

  // Estado local para balance editable
  const [balance, setBalance] = useState(0);
  const [errors, setErrors] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Resetea balance y errores cuando cambia la info o al abrir el modal
  useEffect(() => {
    setBalance(info?.balance || 0);
    setErrors(null);
  }, [info]);

  const handleSubmit = async () => {
    setErrors(null);
    setSubmitting(true);
    dispatch(changeIsLoading(true));

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };

      const response = await axios.patch(
        api.getUpdateWallet,
        {
          userID: info.userID,
          balance: Number(balance),
        },
        config
      );

      if (response.status === 200) {
        dispatch(closeModal());
      }
    } catch (error) {
      const status = error.response?.status;
      setErrors(
        status === 401
          ? "Credenciales incorrectas"
          : "Error al actualizar la cartera"
      );
    } finally {
      setSubmitting(false);
      dispatch(changeIsLoading(false));
    }
  };

  const onClose = () => {
    dispatch(closeModal());
    setBalance(0); // Limpia balance al cerrar modal
    setErrors(null);
  };

  return (
    <Dialog
      open={!!info}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 2,
          backgroundColor: "#fdfcfb",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", color: "#4e342e" }}>
        Información de la Cartera
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Nombre del usuario: {info?.name}
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            ID del Usuario: {info?.userID}
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Correo Electrónico: {info?.emailUser}
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Balance:
          </Typography>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            disabled={submitting}
            style={{ width: "100%", padding: 8, fontSize: 16, marginTop: 4 }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Última Actualización:{" "}
            {info?.lastUpdated
              ? new Date(info.lastUpdated).toLocaleString()
              : "No disponible"}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />
        {Array.isArray(info?.history) && info.history.length > 0 ? (
          info.history.map((item, i) => (
            <Typography key={i} variant="body2">
              {item.date} - {item.type}: {item.amount} {info.currency}
            </Typography>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No hay transacciones registradas.
          </Typography>
        )}
        {errors && (
          <Typography color="error" sx={{ mt: 2 }}>
            {errors}
          </Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined" disabled={submitting}>
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={submitting}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalWallet;
