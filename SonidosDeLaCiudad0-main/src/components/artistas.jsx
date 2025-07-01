import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Artistas = () => (
  <>
    <header>
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

    <main>
      <section>
        <h2>Artistas que se presentarán</h2>

        <div className="artistas-grid">
          {/* 1. Jorge */}
          <article className="artistas-grid-article">
            <h3>🎶 Jorge Véliz</h3>
            <img
              className="artistas-grid-img"
              src="/img/jorge-veliz.jpg"
              alt="Jorge Véliz"
            />
            <p>Cantautor folclórico con un estilo moderno y auténtico…</p>
          </article>

          {/* 2. Skrillex */}
          <article className="artistas-grid-article">
            <h3>🎧 Skrillex</h3>
            <img
              className="artistas-grid-img"
              src="/img/skrillex.jpg"
              alt="Skrillex"
            />
            <p>Referente global de la electrónica y el dubstep…</p>
          </article>

          {/* 3. Dread Mar-I */}
          <article className="artistas-grid-article">
            <h3>🌿 Dread Mar-I</h3>
            <img
              className="artistas-grid-img"
              src="/img/dreadmar.jpg"
              alt="Dread Mar-I"
            />
            <p>Emblema del reggae latinoamericano. Mensaje positivo…</p>
          </article>

          {/* 4. Calamaro */}
          <article className="artistas-grid-article">
            <h3>🎸 Andrés Calamaro</h3>
            <img
              className="artistas-grid-img"
              src="/img/calamaro.jpg"
              alt="Andrés Calamaro"
            />
            <p>Ícono del rock en español, nos deleitará con sus clásicos…</p>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2025 Sonidos de la Ciudad |
        <a href="mailto:info@sonidosdelaciudad.com">info@sonidosdelaciudad.com</a>
      </p>
    </footer>
  </>
);

export default Artistas;
