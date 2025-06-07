import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { openAlert } from "../store/alert";

function AuthGuard({ children, allowedRoles }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentTime = Date.now();
  const { isAuthenticated, jwt, dataUser, expirationTime } = useSelector((state) => state.auth);

  useEffect(() => {

    if (!isAuthenticated || (expirationTime && currentTime >= expirationTime)) {
      console.log(expirationTime)
       dispatch(
         openAlert({
           open: true,
           message: "Sesión expirada o usuario no autenticado. Redirigiendo...",
           icon:  "warning",
         })
       );

      navigate("/login", { replace: true });
    }

    // Si el usuario no tiene los roles permitidos, redirigir a su ruta por defecto
    if (isAuthenticated && !allowedRoles.includes(dataUser.rol)) {
      dispatch(
        openAlert({
          open: true,
          message: "Acceso Denegado Rediriguiendo a login",
          icon: "error",
        })
      );
      navigate( { replace: true });
    }
  }, [
    isAuthenticated,
    expirationTime,
    dataUser,
    allowedRoles,
  ]);

  return children;
}

export default AuthGuard;
