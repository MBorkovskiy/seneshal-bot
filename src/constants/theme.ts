import { CssVarsThemeOptions, createTheme } from "@mui/material/styles";

const theme: CssVarsThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#a68352",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    error: {
      main: "#B3261E",
      light: "#F9DEDC",
      dark: "#601410",
    },
    warning: {
      main: "#FFB74D",
      light: "#FFE0B2",
      dark: "#F57C00",
    },
    info: {
      main: "#2196F3",
      light: "#BBDEFB",
      dark: "#1976D2",
    },
    success: {
      main: "#4CAF50",
      light: "#C8E6C9",
      dark: "#388E3C",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.3,
    },
    body1: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  //   components: {
  //     MuiAppBar: {
  //       styleOverrides: {
  //         root: {
  //           backgroundColor: "#d7e3ff",
  //           color: "#000000",
  //         },
  //       },
  //     },
  //   },
});

export { theme };
