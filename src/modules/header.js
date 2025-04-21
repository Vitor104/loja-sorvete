import React from "react";
import styles from "./header.module.css";
import hero from './heroImg.png';


function Header(){
    return (
        <div className={styles.header}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className={styles.brandName}>DJ Sorvetes</h2>
          </nav>
          <div className={styles.heroContainer}>
            <div className={styles.heroInfo}>
              <h1 className={styles.heroTitle}>Sinta o sabor da felicidade!</h1>
              <p>Sundaes cremosos, picolés refrescantes e os sorvetes mais gostosos da cidade!</p>
            </div>
            <img className={styles.heroImg} src={hero}></img>
          </div>
        </div>
    )
};





export default Header;