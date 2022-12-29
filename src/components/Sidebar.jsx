import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="overlay">
      <ul className="navbar__nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "paint" : undefined)}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="problems"
            className={({ isActive }) => (isActive ? "paint" : undefined)}
          >
            Questions
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
