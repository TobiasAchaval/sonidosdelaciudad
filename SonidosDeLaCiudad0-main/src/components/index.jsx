import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify, FaYoutube, FaHeadphones } from 'react-icons/fa';

const Index = () => {
  // Datos de los audios para un manejo más limpio
  const audioTracks = [
    { artist: 'Andrés Calamaro', file: '/audio/calamaro.mp3' },
    { artist: 'Dread Mar-I', file: '/audio/dreadmar.mp3' },
    { artist: 'Jorge Véliz', file: '/audio/jorge-veliz.mp3' },
    { artist: 'Skrillex', file: '/audio/skrillex.mp3' }
  ];

  return (
    <>
      {/* SECCIÓN HERO (PORTADA) */}
      <header className="hero-container">
        {/* Video de fondo */}
        <div className="background-video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/fondo.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        
        {/* Contenido del Hero */}
        <div className="hero-content">
          <h1>Festival Sonidos de la Ciudad</h1>
          <p>La experiencia musical más esperada del año.</p>
        </div>
        
        {/* Navegación Principal */}
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

      {/* CONTENIDO PRINCIPAL DE LA PÁGINA */}
      <main className="content-wrapper">
        <div className="home-container">
          
          {/* SECCIÓN DE INTRODUCCIÓN */}
          <section className="home-intro-section">
            <h2 className="centered-title">¡Viví la experiencia del festival!</h2>
            <p style={{ textAlign: 'center', maxWidth: '75ch' }}>
              Del <strong>8 al 10 de noviembre de 2025</strong>, el Parque Central se transforma en el epicentro de la música. 
              Tres días inolvidables con artistas locales e internacionales que te harán vibrar. ¡No te quedes afuera!
            </p>
            <div className="button-container">
              <Link to="/compra" className="btn">Comprar Entradas</Link>
            </div>
          </section>

          {/* SECCIÓN DE MEDIOS: YOUTUBE Y SPOTIFY */}
          <section className="home-media-section">
            <h3 className="centered-title">Seguinos en nuestras redes</h3>
            <div className="media-grid">
              <div className="media-item">
                <h4><FaYoutube style={{ color: '#FF0000' }} /> Video Destacado</h4>
                <iframe
                  src="https://www.youtube.com/embed/-e_3Cg9GZFU?si=hSgoQzdiEvhLxl5o"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title="YouTube Video del Festival"
                ></iframe>
              </div>
              <div className="media-item">
                <h4><FaSpotify style={{ color: '#1DB954' }} /> Playlist Oficial</h4>
                <iframe 
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Playlist de Spotify del Festival">
                </iframe>
              </div>
            </div>
          </section>
          
          {/* SECCIÓN DE PLAYLIST DE AUDIO */}
          <section className="home-audio-section">
            <h3 className="centered-title">Escuchá un adelanto de los artistas</h3>
            <div className="audio-playlist">
              {audioTracks.map((track, index) => (
                <div key={index} className="audio-track">
                  <div className="track-info">
                    <FaHeadphones className="track-icon" />
                    <span>{track.artist}</span>
                  </div>
                  <audio controls src={track.file} className="audio-player">
                    Tu navegador no soporta el elemento de audio.
                  </audio>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      
      {/* FOOTER */}
      <footer>
        <p>© 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
      </footer>
    </>
  );
};

// Estilos en línea para componentes específicos (opcional, mejor en CSS)
const styles = `
  .home-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  .media-item {
    background: #fff;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  }
  .media-item h4 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .media-item iframe {
    width: 100%;
    height: 315px;
    border-radius: 8px;
    border: none;
  }
  .audio-playlist {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
  .audio-track {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-fondo);
    padding: 1rem;
    border-radius: var(--radio-borde);
    transition: background-color 0.3s;
  }
  .audio-track:hover {
    background-color: #e9ecef;
  }
  .track-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
  }
  .track-icon {
    color: var(--color-principal);
  }
  .audio-player {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    .audio-track {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
    .audio-player {
      width: 100%;
      max-width: 100%;
    }
  }
`;

// Inyectar los estilos en el head del documento
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


export default Index;