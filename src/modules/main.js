import React from "react";
import styles from './main.module.css';
import example from "./exemplo.jpeg";
import Header from "./header";


function Main() {
    return (
        <div className={styles.main}>
            <Header />
            <div class="card" className={styles.card}>
                <img src={example} class="card-img-top" className={styles.foto} alt="..."></img>
                <div class="card-body" className={styles.cardConteudo}>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

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



export default Main;