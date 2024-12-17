import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Раздел-1
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Раздел-2
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Раздел-3
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Раздел-4
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Раздел-5
      </NavLink>
    </header>
  );
};
