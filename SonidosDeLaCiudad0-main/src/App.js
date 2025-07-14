import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

// Importamos componentes
import Index from './components/index.jsx';
import Artistas from './components/artistas.jsx';
import Cronograma from './components/cronograma.jsx';
import Entradas from './components/entradas.jsx';
import Ubicacion from './components/ubicacion.jsx';
import Contacto from './components/contacto.jsx';
import Compra from './components/Compra.jsx'; 
import ChatBot from './components/chatbot.jsx'; 

// Importamos el CSS principal
import './style.css'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="site-container">
        <Routes>
          {/* Definimos las rutas de la aplicación */}
          <Route path="/" element={<Index />} />
          <Route path="/artistas" element={<Artistas />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/entradas" element={<Entradas />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/compra" element={<Compra />} /> {/* <-- Ruta añadida */}
        </Routes>
        <ChatBot /> {/* El chatbot se muestra en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;