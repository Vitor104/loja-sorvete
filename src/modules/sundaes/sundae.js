import React from "react";
import Header from "../header";
import example from '../exemplo.jpeg';
import styles from './sundae.module.css';



function Sundaes() {
    return (
        <div className={styles.sundaes}>
            <Header />
            <h1>Nossos sundaes:</h1>
            <div class="card" className={styles.card}>
                <img src={example} class="card-img-top" className={styles.foto} alt="..."></img>
                <div class="card-body" className={styles.cardConteudo}>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}


export default Sundaes;