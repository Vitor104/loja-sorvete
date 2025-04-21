import React, {useState} from "react";
import styles from './main.module.css';
import Header from "./header";
import sorvete from './sorvete.jpeg';
import sorveteGrande from './sorveteGrande.jpeg';
import picole from './picole.jpeg';
import sundae from './sundae.jpeg';
import fundo from './fundo.jpeg';



function Main() {
    const [flippedPicole, setFlippedPicole] = useState(false);
    const [flippedSundae, setFlippedSundae] = useState(false);
    const [flippedSorvetePeq, setFlippedSorvetePeq] = useState(false);
    const [flippedSorveteGran, setFlippedSorveteGran] = useState(false);
    return (
        <div className={styles.main}>
            <Header />
        <h1 className={styles.chamada}>Nossos produtos: </h1>
        <div className={styles.flipCardContainer}>
        <div className={`${styles.flipCardInner} ${flippedPicole ? styles.flipped : ''}`}>
          {/* Front Side */}
          <div className={styles.flipCardFront}>
            <div className={`card ${styles.card}`}>
              <img src={picole} className={`card-img-top ${styles.foto}`} alt="Foto de picolé" />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className={`card-title ${styles.titulos}`}>Picolés</h5>
                <p className="card-text">Clique para saber mais!</p>
                <button className="btn btn-primary" onClick={() => setFlippedPicole(true)}>Mostrar mais</button>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className={styles.flipCardBack}>
            <div className={`card ${styles.card}`}>
              <img src={fundo} className={`card-img-top ${styles.foto}`} alt="Fundo rosa" />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className="card-title">Detalhes</h5>
                <p className="card-text">💵 R$ 1,50<br />🍦 Sabores: Amedoim, cajá, castanha do caju, chocolate, leite condensado, coco e morango.</p>
                <button className="btn btn-secondary" onClick={() => setFlippedPicole(false)}>Voltar</button>
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


      <div className={styles.flipCardContainer}>
        <div className={`${styles.flipCardInner} ${flippedSundae ? styles.flipped : ''}`}>
          {/* Front Side */}
          <div className={styles.flipCardFront}>
            <div className={`card ${styles.card}`}>
              <img src={sundae} className={`card-img-top ${styles.foto}`} alt="Foto de um sundae" />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className={`card-title ${styles.titulos}`}>Sundaes</h5>
                <p className="card-text">Clique para saber mais!</p>
                <button className="btn btn-primary" onClick={() => setFlippedSundae(true)}>Mostrar mais</button>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className={styles.flipCardBack}>
            <div className={`card ${styles.card}`}>
              <img src={fundo} className={`card-img-top ${styles.foto}`} alt="Fundo rosa" />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className="card-title">Detalhes</h5>
                <p className="card-text">💵 R$ 3,00<br />🍦 Sabores: Morango e brigadeiro.</p>
                <button className="btn btn-secondary" onClick={() => setFlippedSundae(false)}>Voltar</button>
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


      <div className={styles.flipCardContainer}>
        <div className={`${styles.flipCardInner} ${flippedSorvetePeq ? styles.flipped : ''}`}>
          {/* Front Side */}
          <div className={styles.flipCardFront}>
            <div className={`card ${styles.card}`}>
              <img src={sorvete} className={`card-img-top ${styles.foto}`} alt="Foto de um sorvete pequeno" />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className={`card-title ${styles.titulos}`}>Sorvete</h5>
                <p className="card-text">Clique para saber mais!</p>
                <button className="btn btn-primary" onClick={() => setFlippedSorvetePeq(true)}>Mostrar mais</button>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className={styles.flipCardBack}>
            <div className={`card ${styles.card}`}>
              <img src={fundo} className={`card-img-top ${styles.foto}`} alt="Fundo rosa" />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className="card-title">Detalhes</h5>
                <p className="card-text">💵 R$ 2,50<br />🍦 Sabores: Coco, abacaxi, amedoim, açaí, brigadeiro, napolitano, goiaba, creme passas, toff e flocos.</p>
                <button className="btn btn-secondary" onClick={() => setFlippedSorvetePeq(false)}>Voltar</button>
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


      <div className={styles.flipCardContainer}>
        <div className={`${styles.flipCardInner} ${flippedSorveteGran ? styles.flipped : ''}`}>
          {/* Front Side */}
          <div className={styles.flipCardFront}>
            <div className={`card ${styles.card}`}>
              <img src={sorveteGrande} className={`card-img-top ${styles.foto}`} alt="Foto de um sorvete grande" />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className={`card-title ${styles.titulos}`}>Sorvete (1L)</h5>
                <p className="card-text">Clique para saber mais!</p>
                <button className="btn btn-primary" onClick={() => setFlippedSorveteGran(true)}>Mostrar mais</button>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className={styles.flipCardBack}>
            <div className={`card ${styles.card}`}>
              <img src={fundo} className={`card-img-top ${styles.foto}`} alt="Fundo rosa" />
              <div className={`card-body ${styles.cardConteudo}`}>
                <h5 className="card-title">Detalhes</h5>
                <p className="card-text">💵 R$ 15,00<br />🍦 Sabores: Toff, coco, açaí, flocos e napolitano.</p>
                <button className="btn btn-secondary" onClick={() => setFlippedSorveteGran(false)}>Voltar</button>
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


      <footer className={styles.footer}></footer>

            
        </div>
    )
}





export default Main;