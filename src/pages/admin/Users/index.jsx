import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import {
  openModal,
  fetchGetWalletID,
  selectWalletState,
} from "../../../store/wallet";
import { fetchGetUsers, selectUsersState } from "../../../store/users";
import icon from "../../../constants/icons";
import FlexInput from "../../../components/FlexInput";
import ModalWallet from "../../../components/ModalWallet";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dtUsers } = useSelector(selectUsersState);
  const { wallet } = useSelector(selectWalletState);

  const [searchAlias, setSearchAlias] = useState("");
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  useEffect(() => {
    dispatch(fetchGetUsers());
  }, [dispatch]);

  const filteredUsers = dtUsers.filter((user) =>
    user.alias.toLowerCase().includes(searchAlias.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleWalletClick = (userID) => {
    dispatch(fetchGetWalletID(userID));
    dispatch(openModal({ open: true, id: userID }));
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", color: "#333" }}
      >
        Gestión de Usuarios
      </Typography>

      <Box sx={{ mb: 4, maxWidth: 400 }}>
        <FlexInput
          sm={12}
          id="searchAlias"
          name="searchAlias"
          label="Buscar por alias"
          value={searchAlias}
          onchange={(e) => setSearchAlias(e.target.value)}
          endAdornment={<icon.search color="action" sx={{ mr: 1 }} />}
        />
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 4,
          boxShadow: 4,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#D7A77A" }}>
              {[
                "Nombre",
                "Alias",
                "Email",
                "Rol",
                "Fecha de creación",
                "Acciones",
              ].map((header) => (
                <TableCell
                  key={header}
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, idx) => (
                <TableRow
                  key={user.userID}
                  sx={{
                    backgroundColor: idx % 2 === 0 ? "#fafafa" : "#f0f0f0",
                    "&:hover": { backgroundColor: "#f5e8de" },
                    transition: "0.3s",
                  }}
                >
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.alias}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.rol}</TableCell>
                  <TableCell align="center">{user.createdAt}</TableCell>

                  <TableCell align="center">
                    <IconButton color="primary">
                      <icon.edit />
                    </IconButton>
                    <IconButton color="error">
                      <icon.delete />
                    </IconButton>
                    <IconButton
                      color="success"
                      onClick={() => handleWalletClick(user.userID)}
                    >
                      <icon.wallet />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1" color="text.secondary">
                    No se encontraron usuarios con ese alias.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index)}
            sx={{
              minWidth: 40,
              height: 40,
              borderRadius: "50%",
              fontWeight: "bold",
              fontSize: "0.9rem",
              color: page === index ? "white" : "#333",
              backgroundColor: page === index ? "#DBAF91" : "#f0f0f0",
              "&:hover": {
                backgroundColor: page === index ? "#c98b66" : "#e2e2e2",
              },
              boxShadow: page === index ? 2 : 0,
              transition: "all 0.2s ease-in-out",
            }}
          >
            {index + 1}
          </Button>
        ))}
      </Box>

      {wallet.open && <ModalWallet />}
    </Box>
  );
};

export default Dashboard;
