// Colores y temas para toda la página de Zapatería

import { BackHand } from "@mui/icons-material";

// Paleta base
const colors = {
  // Colores de marca
  primary: "#1A237E", // Azul oscuro
  primaryLight: "#534ABF", // Azul claro
  primaryDark: "#000051", // Azul muy oscuro
  secondary: "#FF6F00", // Naranja fuerte
  secondaryLight: "#FFA040", // Naranja claro
  secondaryDark: "#C43E00", // Naranja oscuro

  // Acentos adicionales
  accent1: "#E53935", // Rojo intenso
  accent2: "#8E24AA", // Morado vibrante
  accent3: "#039BE5", // Celeste
  accent4: "#43A047", // Verde
  accent5: "#FDD835", // Amarillo

  // Neutros
  neutral100: "#FAFAFA",
  neutral200: "#F5F5F5",
  neutral300: "#EEEEEE",
  neutral400: "#E0E0E0",
  neutral500: "#BDBDBD",
  neutral600: "#9E9E9E",
  neutral700: "#757575",
  neutral800: "#616161",
  neutral900: "#424242",

  // Colores semánticos
  success: "#4CAF50",
  successLight: "#80E27E",
  successDark: "#087F23",
  error: "#D32F2F",
  errorLight: "#FF6659",
  errorDark: "#9A0007",
  warning: "#FFA000",
  warningLight: "#FFD149",
  warningDark: "#C67100",
  info: "#1976D2",
  infoLight: "#63A4FF",
  infoDark: "#004BA0",

  // Texto
  textPrimary: "#212121",
  textSecondary: "#757575",
  textDisabled: "#BDBDBD",

  // Fondos
  backgroundDefault: "#FFFFFF",
  backgroundPaper: "#FDFDFD",

  // Bordes y realces
  border: "#E0E0E0",
  highlight: "#FFF59D",

  // Zapatería específico
  leatherTan: "#D2B48C",
  leatherBrown: "#795548",
  suedeGray: "#9E9E9E",
  rubberBlack: "#212121",
  canvasWhite: "#FFFFFF",

  //colores comunes
  white: "#FFFFFF"
};

// Colores personalizados adicionales
const colors_custom = {
  colorPrimary: "#444444 ", // Marrón claro
  color: "#1e1e2f", // Fondo oscuro opcional
  backHandPaper: "#FDFDFD"
};

// Exportación combinada
const themeColors = {
  ...colors,
  ...colors_custom,
};

export default themeColors;
