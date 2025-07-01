import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import '../style.css';

const Contacto = () => {
  const [captchaValido, setCaptchaValido] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [displayedData, setDisplayedData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedFormData = localStorage.getItem('contactFormSubmitted');
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setDisplayedData(parsedData);
      setFormData(parsedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (!captchaValido) {
  alert("Por favor confirmá que no sos un robot.");
  return;
} 
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre || formData.nombre.trim().length < 3) {
      newErrors.nombre = "Por favor ingresá tu nombre (mínimo 3 letras).";
    }
    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Ingresá un correo electrónico válido.";
    }
    if (!formData.mensaje || formData.mensaje.trim().length < 5) {
      newErrors.mensaje = "El mensaje no puede estar vacío ni ser tan corto.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setDisplayedData(formData);
    localStorage.setItem('contactFormSubmitted', JSON.stringify(formData));
    alert('¡Gracias por tu mensaje! Te responderemos lo antes posible.');

    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    setErrors({});
  };

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

      <main className="contact-page-content">
        <div className="Fondo">
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre completo:
              <input
                type="text"
                name="nombre"
                required
                placeholder="Ej: Juan Pérez"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <span style={{ color: 'red' }}>{errors.nombre}</span>}
            </label>

            <label>
              Correo electrónico:
              <input
                type="email"
                name="email"
                required
                placeholder="Ej: ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </label>

            <label>
              Asunto del mensaje:
              <input
                type="text"
                name="asunto"
                placeholder="Ej: Consulta sobre entradas"
                value={formData.asunto}
                onChange={handleChange}
              />
            </label>

            <label>
              Mensaje:
              <textarea
                name="mensaje"
                rows="5"
                placeholder="Escribinos tu consulta o comentario..."
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
              {errors.mensaje && <span style={{ color: 'red' }}>{errors.mensaje}</span>}
            </label>
            <ReCAPTCHA
  sitekey="6LfZZnMrAAAAAHV-2aFDZZq7fsNkwEl0odjEicLa"
  onChange={() => setCaptchaValido(true)}
  onExpired={() => setCaptchaValido(false)}
/>

            <input type="submit" value="Enviar mensaje" />
          </form>
        </div>

        <div className="localStorage-display">
          <h3>Datos guardados (último envío):</h3>
          {Object.values(displayedData).some(value => value !== '') ? (
            <ul>
              {Object.entries(displayedData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value || '(Vacío)'}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay datos de envíos anteriores.</p>
          )}

        </div>
      </main>

      <footer>
        <p>&copy; 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">info@sonidosdelaciudad.com</a></p>
      </footer>
    </>
  );
};

export default Contacto;
