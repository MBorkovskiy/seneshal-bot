import "./App.css";

import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
