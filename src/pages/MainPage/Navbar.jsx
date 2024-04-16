/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LogoDidactik from "../../assets/LogoDidactik.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={LogoDidactik} alt="" />
      </div>
      <Link to="/login" className="primary-button" >
        Iniciar Sesion
      </Link>
      <div className="navbar-menu-container">
      </div>
    </nav>
  );
};

export default Navbar;
