import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheet/_navbar.scss";
import { CgDetailsMore } from "react-icons/cg";
import { useProblems } from "../context/problems-context";

const Navbar = () => {
  const { isBurgerOpen, setIsBurgerOpen } = useProblems();

  return (
    <header>
      <div className="navbar">
        <h1 className="navbar__logo">
          <span className="paint">MATH</span> Trainer
        </h1>
        <div className="navbar__burger" onClick={() => setIsBurgerOpen(true)}>
          <CgDetailsMore className="icon" />
        </div>
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
          <li className="nav-item">
            <NavLink
              to="dashboard"
              className={({ isActive }) => (isActive ? "paint" : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
