import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Cronograma = () => {
  return (
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
          <h2>Cronograma de Actuaciones</h2>

          <div className="cronograma-grid">
            {/* Día 1 */}
            <div className="cronograma-dia">
              <h3>Viernes 8 de Agosto</h3>
              <div className="actuacion">
                <h4><i className="far fa-clock"></i> 18:00 - Escenario Norte</h4>
                <p><i className="fas fa-guitar"></i> Jorge Véliz</p>
              </div>
              <div className="actuacion">
                <h4><i className="far fa-clock"></i> 21:00 - Escenario Sur</h4>
                <p><i className="fas fa-leaf"></i> Dread Mar-I</p>
              </div>
            </div>

            {/* Día 2 */}
            <div className="cronograma-dia">
              <h3>Sábado 9 de Agosto</h3>
              <div className="actuacion">
                <h4><i className="far fa-clock"></i> 20:00 - Escenario Central</h4>
                <p><i className="fas fa-microphone-alt"></i> Andrés Calamaro</p>
              </div>
            </div>

            {/* Día 3 */}
            <div className="cronograma-dia">
              <h3>Domingo 10 de Agosto</h3>
              <div className="actuacion">
                <h4><i className="far fa-clock"></i> 22:00 - Escenario Electrónico</h4>
                <p><i className="fas fa-headphones"></i> Skrillex</p>
              </div>
            </div>
          </div>
          
          <h2 style={{ marginTop: '4rem' }}>Cronograma Completo</h2>

          <div className="custom-table-container">
            <table>
              <thead>
                <tr>
                  <th>Día</th>
                  <th>Escenario</th>
                  <th>Hora</th>
                  <th>Artista</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Día">Viernes 8</td>
                  <td data-label="Escenario">Escenario Norte</td>
                  <td data-label="Hora">18:00</td>
                  <td data-label="Artista">Jorge Véliz</td>
                </tr>
                <tr>
                  <td data-label="Día">Viernes 8</td>
                  <td data-label="Escenario">Escenario Sur</td>
                  <td data-label="Hora">21:00</td>
                  <td data-label="Artista">Dread Mar-I</td>
                </tr>
                <tr>
                  <td data-label="Día">Sábado 9</td>
                  <td data-label="Escenario">Escenario Central</td>
                  <td data-label="Hora">20:00</td>
                  <td data-label="Artista">Andrés Calamaro</td>
                </tr>
                <tr>
                  <td data-label="Día">Domingo 10</td>
                  <td data-label="Escenario">Escenario Electrónico</td>
                  <td data-label="Hora">22:00</td>
                  <td data-label="Artista">Skrillex</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Sonidos de la Ciudad | 
          <a href="mailto:info@sonidosdelaciudad.com">info@sonidosdelaciudad.com</a>
        </p>
      </footer>
    </>
  );
};

export default Cronograma;