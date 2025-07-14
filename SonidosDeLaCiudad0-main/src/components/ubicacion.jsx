import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style.css'; 


const Ubicacion = () => {
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
            <h2>¿Dónde es el festival?</h2>
            <p style={{textAlign: 'center', marginBottom: '2rem'}}>
                El evento "Sonidos de la Ciudad" se llevará a cabo en el corazón verde de la ciudad, el <strong>Parque Central</strong>. 
                Un espacio amplio y al aire libre ideal para disfrutar de la música.
            </p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.904471212858!2d-64.2659177852964!3d-27.78099638276181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b521877660231%3A0x436b532e497b47b1!2sParque%20Aguirre!5e0!3m2!1ses-419!2sar!4v1678886479000!5m2!1ses-419!2sar"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ubicación del Festival"
              ></iframe>
            </div>
          </section>
      </main>
      <footer>
        <p>© 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
      </footer>
    </>
  );
};

export default Ubicacion;