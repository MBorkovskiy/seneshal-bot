import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="grey-scroll">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Познакомимся ближе
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
        Устроить свидание
      </NavLink>
      <NavLink
        to="/showcase"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Витрина Senechal
      </NavLink>
    </header>
  );
};
