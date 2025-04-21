import React from "react";
import styles from "./header.module.css";
import hero from './heroImg.png';


function Header(){
    return (
        <div className={styles.header}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className={styles.brandName} href="#">DJ Sorvetes</a>
          </nav>
          <div className={styles.heroContainer}>
            <div className={styles.heroInfo}>
              <h1 className={styles.heroTitle}>Sinta o sabor da felicidade!</h1>
              <p>Sundaes cremosos, picolés refrescantes e os sorvetes mais gostosos da cidade!</p>
            </div>
            <img className={styles.heroImg} src={hero} alt="hero image"></img>
          </div>
        </div>
    )
};


/*
background: url('./heroImg.png') center/contain no-repeat;





<button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
                
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


*/ 



export default Header;