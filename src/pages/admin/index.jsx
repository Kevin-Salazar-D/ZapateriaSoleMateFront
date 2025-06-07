import React, { useState } from "react";
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Dashboard, People, Settings } from "@mui/icons-material";

const AdminTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Panel de Administración
      </Typography>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Tabs value={activeTab} onChange={handleChange} centered>
          <Tab icon={<Dashboard />} label="Dashboard" />
          <Tab icon={<People />} label="Usuarios" />
          <Tab icon={<Settings />} label="Configuración" />
        </Tabs>
      </Paper>
      <Box
        sx={{
          mt: 4,
          p: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          backgroundColor: "#fafafa",
        }}
      >
        {activeTab === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h6">Ventas del Día</Typography>
                <Typography variant="h4" color="primary">
                  $1,200
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h6">Usuarios Activos</Typography>
                <Typography variant="h4" color="secondary">
                  150
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}
        {activeTab === 1 && (
          <List>
            {["Juan Pérez", "Ana Gómez", "Carlos López"].map((user, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={user} />
                <Button variant="contained" color="error" size="small">
                  Eliminar
                </Button>
              </ListItem>
            ))}
          </List>
        )}
        {activeTab === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Preferencias del Sistema
            </Typography>
            <Button variant="contained" color="primary">
              Guardar Cambios
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default AdminTabs;
