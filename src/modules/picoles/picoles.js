import React, { useState } from 'react';
import styles from './picoles.module.css';
import Header from "../header";
import picole from '../picole.jpeg';

function Picoles() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div>
      <Header />
      <h1>Nossos picolés:</h1>

      <div className={styles.flipCardContainer}>
        <div className={`${styles.flipCardInner} ${flipped ? styles.flipped : ''}`}>
          {/* Front Side */}
          <div className={styles.flipCardFront}>
            <div className={`card ${styles.card}`}>
              <img src={picole} className={`card-img-top ${styles.foto}`} alt="..." />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className="card-title">Picolé de Chocolate</h5>
                <p className="card-text">Clique para saber mais!</p>
                <button className="btn btn-primary" onClick={() => setFlipped(true)}>Mostrar mais</button>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className={styles.flipCardBack}>
            <div className={`card ${styles.card}`}>
              <img src={picole} className={`card-img-top ${styles.foto}`} alt="..." />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className="card-title">Detalhes</h5>
                <p className="card-text">💵 R$ 4,00<br />🍦 Sabores: Chocolate, Morango, Coco</p>
                <button className="btn btn-secondary" onClick={() => setFlipped(false)}>Voltar</button>
                <hr></hr>
                <a
                  href="https://wa.me/5583991717748" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <button className="btn btn-success">Faça já o seu pedido!</button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picoles;



/*
const [flipped, setFlipped] = useState(false);
    return (
        <div className={`picoles ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <Header />
            <h1>Nossos picolés:</h1>
            <div class="card" className={styles.card}>
                <img src={example} class="card-img-top" className={styles.foto} alt="..."></img>
                <div class="card-body" className={styles.cardConteudo}>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button variant="primary" onClick={() => setFlipped(true)} class="btn btn-primary">Go somewhere</button>
                </div>
            </div>

            <div class="card" className={styles.card}>
                <img src={example} class="card-img-top" className={styles.foto} alt="..."></img>
                <div class="card-body" className={styles.cardConteudo}>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Parte de trás</p>
                    <button variant="secondary" onClick={() => setFlipped(false)} class="btn btn-primary">Go somewhere</button>
                </div>
            </div>

            
        </div>



*/