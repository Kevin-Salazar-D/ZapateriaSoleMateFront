import { Suspense } from "react";

// project import

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
