import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constants/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </ThemeProvider>
  );
};
