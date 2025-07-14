import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import '../style.css';

const Contacto = () => {
  const [captchaValido, setCaptchaValido] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '', email: '', asunto: '', mensaje: ''
  });

  const [displayedData, setDisplayedData] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    try {
      const savedFormData = localStorage.getItem('contactFormSubmitted');
      if (savedFormData) {
        setDisplayedData(JSON.parse(savedFormData));
      }
    } catch (error) {
      console.error("Error al leer de localStorage", error);
      setDisplayedData(null);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre || formData.nombre.trim().length < 3) {
      newErrors.nombre = "Por favor ingresá tu nombre (mínimo 3 letras).";
    }
    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Ingresá un correo electrónico válido.";
    }
    if (!formData.mensaje || formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValido) {
      alert("Por favor, confirma que no eres un robot.");
      return;
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    try {
      localStorage.setItem('contactFormSubmitted', JSON.stringify(formData));
      setDisplayedData(formData);
    } catch (error) {
      console.error("Error al guardar en localStorage", error);
    }

    setIsSubmitted(true);
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

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
          <h2>Contacto</h2>
          <div className="contact-layout">
            <div className="contact-form-container">
              {isSubmitted ? (
                <div className="form-success-message">
                  <h3>¡Mensaje Enviado!</h3>
                  <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
                  <button className="btn" onClick={() => setIsSubmitted(false)}>Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-field">
                    <label htmlFor="nombre">Nombre completo</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className={errors.nombre ? 'invalid' : ''} />
                    {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'invalid' : ''} />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="asunto">Asunto</label>
                    <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} className={errors.mensaje ? 'invalid' : ''}></textarea>
                    {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
                  </div>
                  <div className="recaptcha-container">
                    <ReCAPTCHA
                      sitekey="6LfZZnMrAAAAAHV-2aFDZZq7fsNkwEl0odjEicLa"
                      onChange={() => setCaptchaValido(true)}
                      onExpired={() => setCaptchaValido(false)}
                    />
                  </div>
                  <button type="submit" className="btn">Enviar Mensaje</button>
                </form>
              )}
            </div>
            
            <div className="last-submission-display">
              <h3>Último envío guardado</h3>
              {displayedData ? (
                <ul>
                  <li><strong>Nombre:</strong> {displayedData.nombre}</li>
                  <li><strong>Email:</strong> {displayedData.email}</li>
                  <li><strong>Asunto:</strong> {displayedData.asunto || '(Sin asunto)'}</li>
                  <li><strong>Mensaje:</strong> {displayedData.mensaje}</li>
                </ul>
              ) : (
                <p>Aún no has enviado ningún formulario.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">info@sonidosdelaciudad.com</a></p>
      </footer>
    </>
  );
};

export default Contacto;