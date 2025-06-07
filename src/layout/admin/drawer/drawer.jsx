import { Box } from "@mui/material";
import DrawerAdmin from "./drawerAdmin";
import DrawerMin from "./drawerMin";

import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../../store/configs";


function DrawerContainer() {

  const width = useSelector((state) => state.configs.drawerWidth);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <Box
      sx={{
        width: width,
        transition: "width 0.3s ease",
        overflow: "hidden",
      }}
    >
      {width === 250 ? (
        <DrawerAdmin onMinimize={handleToggle} />
      ) : (
        <DrawerMin onExpand={handleToggle} />
      )}
    </Box>
  );
}

export default DrawerContainer;
