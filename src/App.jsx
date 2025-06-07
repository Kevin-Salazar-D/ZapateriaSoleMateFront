import AppRouter from "./routes";
import Alert from "../src/components/Alert";
import { Fragment } from "react";
import  Box  from "@mui/material/Box";
import Loader from "./components/Loader";
function App() {
  return (
    <Fragment>
      <Box sx={{ width: "100%" }}>
        <Alert/>
        <Loader></Loader>
        <AppRouter />
      </Box>
    </Fragment>
  );
}

export default App;
