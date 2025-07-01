import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

// importamos componentes
import Index from './components/index.jsx';
import Artistas from './components/artistas.jsx';
import Cronograma from './components/cronograma.jsx';
import Entradas from './components/entradas.jsx';
import Ubicacion from './components/ubicacion.jsx';
import Contacto from './components/contacto.jsx';
import ChatBot from './components/chatbot.jsx'; 



// Importamos el main css
import './style.css'; // 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Definimos rutas */}
        <Route path="/" element={<Index />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/contacto" element={<Contacto />} />

      </Routes>
      <ChatBot /> {/* Incluimos el chatbot siempre */}
    </Router>
  );
}


export default App;