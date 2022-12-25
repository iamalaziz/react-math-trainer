import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheet/_navbar.scss";

const Navbar = () => {

  return (
    <div className="navbar">
      <h1 className="navbar__logo">
        <span className="paint">MATH</span> Trainer
      </h1>
      <ul className="navbar__nav-list">
        <li className="nav-item">
          <NavLink to="/" end className={({isActive})=>isActive ? "paint" : undefined}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="questions" className={({isActive})=>isActive ? "paint" : undefined}>Questions</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
