import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

// 1. Importamos las imágenes desde la carpeta 'src/assets'
import visaLogo from '../assets/visa.png';
import mastercardLogo from '../assets/mastercard.png';

const Entradas = () => {
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
          <h2>Información sobre entradas</h2>
          <p style={{textAlign: 'center', maxWidth: '60ch', margin: '0 auto 2rem auto'}}>
            El festival ofrece diferentes tipos de entradas para que elijas la experiencia que mejor se adapte a vos. ¡Asegurá tu lugar cuanto antes!
          </p>

          <div className="custom-table-container">
            <table>
              <thead>
                <tr>
                  <th>Tipo de Entrada</th>
                  <th>Precio</th>
                  <th>Beneficios</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Tipo">Entrada General</td>
                  <td data-label="Precio">$5.000</td>
                  <td data-label="Beneficios">Acceso a un solo día del festival.</td>
                </tr>
                <tr>
                  <td data-label="Tipo">Abono 3 Días</td>
                  <td data-label="Precio">$12.000</td>
                  <td data-label="Beneficios">Acceso a los tres días del festival.</td>
                </tr>
                <tr>
                  <td data-label="Tipo">VIP</td>
                  <td data-label="Precio">$20.000</td>
                  <td data-label="Beneficios">Acceso a los tres días + zona exclusiva y bebida de cortesía.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="medios-pago">
            <h4>Aceptamos</h4>
            <div className="card-icons">
              {/* 2. Usamos las variables importadas en el 'src' */}
              <img src={visaLogo} alt="Visa" />
              <img src={mastercardLogo} alt="Mastercard" />
            </div>
          </div>


          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/compra" className="btn">
              Comprar Entradas Ahora
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">info@sonidosdelaciudad.com</a></p>
      </footer>
    </>
  );
};

export default Entradas;