import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function GuestGuard({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, defaultPath } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      const redirectTo = location.state?.from || defaultPath || "/";
     

      navigate(redirectTo, {
        state: { from: "" },
        replace: true,
      });
    }
  }, [isAuthenticated, location, defaultPath]);

  return children;
}

export default GuestGuard;
