import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheet/_sidebar.scss";
import { GrClose } from "react-icons/gr";
import { useProblems } from "../context/problems-context";

const Sidebar = () => {
  const {setIsBurgerOpen} = useProblems();
  return (
    <div className="overlay" onClick={() => setIsBurgerOpen(false)}>
      <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
        <i className="close-btn" onClick={() => setIsBurgerOpen(false)}>
          <GrClose />
        </i>
        <ul className="nav-list">
          <li className="nav-item" onClick={() => setIsBurgerOpen(false)}>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "paint" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item" onClick={() => setIsBurgerOpen(false)}>
            <NavLink
              to="problems"
              className={({ isActive }) => (isActive ? "paint" : undefined)}
            >
              Questions
            </NavLink>
          </li>
          <li className="nav-item" onClick={() => setIsBurgerOpen(false)}>
            <NavLink
              to="dashboard"
              className={({ isActive }) => (isActive ? "paint" : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
