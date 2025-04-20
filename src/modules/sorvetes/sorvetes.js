import react from "react";
import styles from './sorvetes.module.css';
import Header from "../header";
import example from '../exemplo.jpeg';


function Sorvetes() {
    return (
        <div className={styles.sorvetes}>
            <Header />
            <h1>Nossos sorvetes:</h1>
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


export default Sorvetes;