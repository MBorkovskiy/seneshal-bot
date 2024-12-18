import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="grey-scroll">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Знакомство
      </NavLink>
      <NavLink
        to="/villa"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Villa SPA
      </NavLink>
      <NavLink
        to="/date"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Свидание
      </NavLink>
      <NavLink
        to="/showcase"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Витрина
      </NavLink>
    </header>
  );
};
