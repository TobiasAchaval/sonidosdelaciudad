import React from 'react';
import { Link } from 'react-router-dom';

const Artistas = () => (
  <>
    <header className="page-header-interno">
      <nav className="sticky-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/artistas">Artistas</Link></li>
          <li><Link to="/cronograma">Cronograma</Link></li>
          <li><Link to="/entradas">Entradas</Link></li>
          <li><Link to="/ubicacion">Ubicación</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>

    <main className="content-wrapper">
      <section>
        <h2>Artistas que se presentarán</h2>
        <div className="artistas-grid">
          {/* Tarjeta de Artista */}
          <article className="artista-card">
            <img className="artista-card-img" src="/img/jorge-veliz.jpg" alt="Jorge Véliz" />
            <div className="artista-card-content">
              <h3><i className="fas fa-guitar"></i> Jorge Véliz</h3>
              <p>Cantautor folclórico con un estilo moderno y auténtico. Jorge representa la esencia musical del norte argentino y ha conquistado escenarios de todo el país.</p>
            </div>
          </article>
          
          {/* Tarjeta de Artista */}
          <article className="artista-card">
            <img className="artista-card-img" src="/img/skrillex.jpg" alt="Skrillex" />
            <div className="artista-card-content">
              <h3><i className="fas fa-headphones"></i> Skrillex</h3>
              <p>Uno de los referentes globales de la música electrónica y el dubstep. Con su energía desbordante y sets visuales, ofrecerá un espectáculo vibrante y único.</p>
            </div>
          </article>

          {/* Tarjeta de Artista */}
          <article className="artista-card">
            <img className="artista-card-img" src="/img/dreadmar.jpg" alt="Dread Mar-I" />
            <div className="artista-card-content">
              <h3><i className="fas fa-leaf"></i> Dread Mar-I</h3>
              <p>Emblema del reggae latinoamericano. Su mensaje positivo y su estilo inconfundible llegan al corazón de miles de fans. Un show para vibrar en paz y armonía.</p>
            </div>
          </article>

          {/* Tarjeta de Artista */}
          <article className="artista-card">
            <img className="artista-card-img" src="/img/calamaro.jpg" alt="Andrés Calamaro" />
            <div className="artista-card-content">
              <h3><i className="fas fa-microphone-alt"></i> Andrés Calamaro</h3>
              <p>Ícono del rock en español, Calamaro nos deleitará con sus clásicos y su inconfundible presencia escénica. Una leyenda viva que no necesita presentación.</p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">info@sonidosdelaciudad.com</a></p>
    </footer>
  </>
);

export default Artistas;