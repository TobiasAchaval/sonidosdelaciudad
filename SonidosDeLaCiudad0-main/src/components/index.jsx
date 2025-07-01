
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
      
      <div>
        
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
       <div className="site-content-wrapper"> 
              <div className="background-video-container">
               <video autoPlay muted loop> {/* Añadido playsInline para iOS */}
                <source src="/video/fondo.mp4" type="video/mp4" /> {/* Usar fondo.mp4 */}
               </video>
                <div className="background-video-overlay">
               </div> {/* Overlay sobre el video */}
        </div> 
        <main>          
          <section>
            <h2>¡Viví la experiencia del festival más esperado del año!</h2>
            <p>Del 8 al 10 de noviembre de 2025 en el Parque Central de la ciudad. Tres días de música, cultura y emociones con artistas locales e internacionales.</p>
          </section>

          <section>
            <h3>Artistas principales</h3>
            <ul>
              <li>Jorge Véliz</li>
              <li>Skrillex</li>
              <li>Dread Mar-I</li>
              <li>Andrés Calamaro</li>
            </ul>
          </section>

          <section>
            <h3>Seguilos en sus redes</h3>
            <div className="media-social-container">
              <iframe
                src="https://www.youtube.com/embed/-e_3Cg9GZFU?si=hSgoQzdiEvhLxl5o"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="YouTube Video"
                frameBorder="0"
              ></iframe>
              <iframe 
                src="https://open.spotify.com/embed/track/1M790SJApJ97Fewi2lbeUg?utm_source=generator"
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
              <iframe
                src="https://open.spotify.com/embed/artist/3tAICgiSR5PfYY4B8qsoAU?utm_source=generator"
                title="Spotify Embed"
                frameBorder="0" // Añadido para consistencia
                allowFullScreen="" // Añadido según el código de incrustación de Spotify
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" // Añadido según el código de incrustación de Spotify
                loading="lazy" // Añadido para optimización de carga
              ></iframe>
            </div>
          </section>
          <section>
            <h3>Escuchá un adelanto</h3>
          <div className="audio-players-container">
            <audio controls src="/audio/calamaro.mp3">Your browser does not support the audio element.</audio>
            <audio controls src="/audio/dreadmar.mp3">Your browser does not support the audio element.</audio>
            <audio controls src="/audio/jorge-veliz.mp3">Your browser does not support the audio element.</audio>
            <audio controls src="/audio/skrillex.mp3">Your browser does not support the audio element.</audio>
          </div> 
          </section>       
        </main>   
        <footer>
          <p>© 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
        </footer>
        </div>

      </div>
  );
};

export default Index;