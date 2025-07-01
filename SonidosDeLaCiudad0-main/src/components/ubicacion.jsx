import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style.css'; 


const Ubicacion = () => {
  return (
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
          <div className="Fondo">
        <h2>¿Dónde es el festival?</h2>
        <p>Se llevará a cabo en el Parque Central, Ciudad.</p>
        <div className="map-container">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019688799!2d-122.4194151846815!3d37.77492977975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e7b1b%3A0x4c9b1b1b1b1b1b1b!2sParque%20Central%2C%20Ciudad!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar"
          title="Festival Location"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        </div>
      </main>
      <footer>
        <p>© 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
      </footer>
    </>
  );
};

export default Ubicacion;