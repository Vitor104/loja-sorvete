import React from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";


function Header(){
    return (
        <div className={styles.header}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">DJ Sorvetes</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link" href="#">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sundaes" className="nav-link" href="#">Sundaes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/picoles" className="nav-link" href="#">Picolés</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sorvetes" className="nav-link">Sorvetes</NavLink>
        </li>
      </ul>
    </div>
  </nav>

  <div className={styles.info}>
        <h1>Sinta o sabor da felicidade!</h1>
        <h4>Sundaes cremosos, picolés refrescantes e os sorvetes mais gostosos da cidade!</h4>
  </div>
        </div>
    )
};



export default Header;