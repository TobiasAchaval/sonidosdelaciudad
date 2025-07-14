import React, { useState, useEffect } from 'react'; // 'useCallback' ha sido eliminado
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';

const Compra = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', dob: '', country: '',
        event: '', ticketType: '', ticketQuantity: '1',
        cardNumber: '', expiryDate: '', cvv: '', cardName: ''
    });
    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]);
    const [events, setEvents] = useState([]);
    const [cardType, setCardType] = useState('');
    const [timer, setTimer] = useState(15 * 60);

    const ticketPrices = { "General": 1.0, "VIP": 1.5, "Palco": 2.0 };

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'fullName':
                if (!value || value.trim().length < 3) error = "Nombre inválido (mínimo 3 letras).";
                break;
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Correo electrónico inválido.";
                break;
            case 'phone':
                if (!/^\d{10}$/.test(value.replace(/\s/g, ''))) error = "Teléfono debe tener 10 dígitos.";
                break;
            case 'dob':
                const dobMatch = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
                if (!dobMatch) {
                    error = "Formato de fecha debe ser DD/MM/AAAA.";
                } else {
                    const [, day, month, year] = dobMatch;
                    const birthDate = new Date(+year, +month - 1, +day);
                    const age = (new Date() - birthDate) / 31557600000;
                    if (isNaN(birthDate.getTime()) || age < 18) error = "Debe ser mayor de 18 años.";
                }
                break;
            case 'country':
            case 'event':
            case 'ticketType':
                if (!value) error = "Debe seleccionar una opción.";
                break;
            case 'cardNumber':
                if (!/^\d{15,16}$/.test(value.replace(/\s/g, ''))) error = "Número de tarjeta debe ser de 15 o 16 dígitos.";
                break;
            case 'cardName':
                if (!value || value.trim().length < 3) error = "Nombre del titular es inválido.";
                break;
            case 'expiryDate':
                const expMatch = value.match(/^(0[1-9]|1[0-2])\/(\d{2})$/);
                if (!expMatch) {
                    error = "Fecha inválida (formato MM/AA).";
                } else {
                    const [, expMonth, expYear] = expMatch;
                    const expiry = new Date(`20${expYear}`, expMonth - 1);
                    const today = new Date();
                    // Ajusta 'today' al primer día del mes para comparar correctamente
                    today.setDate(1);
                    today.setHours(0, 0, 0, 0);
                    if (expiry < today) error = "La tarjeta ha vencido.";
                }
                break;
            case 'cvv':
                if (!/^\d{3,4}$/.test(value)) error = "CVV debe tener 3 o 4 dígitos.";
                break;
            default:
                break;
        }
        return error;
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let finalValue = value;
        
        if (name === 'cardNumber') finalValue = value.replace(/\D/g, '').slice(0, 16);
        else if (name === 'expiryDate') {
            finalValue = value.replace(/\D/g, '').slice(0, 4);
            if (finalValue.length > 2) finalValue = `${finalValue.slice(0, 2)}/${finalValue.slice(2)}`;
        } else if (name === 'cvv') finalValue = value.replace(/\D/g, '').slice(0, 4);
        
        setFormData(prev => ({ ...prev, [name]: finalValue }));

        if (errors[name]) {
            const error = validateField(name, finalValue);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };
    
    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (['ticketQuantity'].includes(key)) return;

            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            alert("¡Compra realizada con éxito! Recibirás un correo con tus entradas.");
            navigate('/');
        } else {
            console.log("Errores de validación:", errors);
            alert("Por favor, corrija los errores marcados en el formulario.");
        }
    };

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,cca2')
            .then(response => response.json())
            .then(data => {
                const sortedCountries = data
                    .map(c => ({ nameES: c.name.common, iso2: c.cca2 }))
                    .sort((a, b) => a.nameES.localeCompare(b.nameES));
                setCountries(sortedCountries);
            }).catch(error => console.error("Error al cargar países:", error));

        const eventData = [
            { evento: "Festival Sonidos de la Ciudad - Viernes", fecha: "2025-08-08", lugar: "Parque Central", artista: "Jorge Véliz y Dread Mar-I", precio: 5000, moneda: "ARS" },
            { evento: "Festival Sonidos de la Ciudad - Sábado", fecha: "2025-08-09", lugar: "Parque Central", artista: "Andrés Calamaro", precio: 5000, moneda: "ARS" },
            { evento: "Festival Sonidos de la Ciudad - Domingo", fecha: "2025-08-10", lugar: "Parque Central", artista: "Skrillex", precio: 5000, moneda: "ARS" }
        ];
        setEvents(eventData);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
        const number = formData.cardNumber.replace(/\s/g, '');
        if (/^4/.test(number)) setCardType('visa');
        else if (/^5[1-5]/.test(number)) setCardType('mastercard');
        else setCardType('');
    }, [formData.cardNumber]);

    const selectedEvent = events[formData.event];
    const totalCost = selectedEvent && formData.ticketType && formData.ticketQuantity
        ? (selectedEvent.precio * ticketPrices[formData.ticketType] * formData.ticketQuantity).toFixed(2) : '0.00';
    
    const isSubmitDisabled = timer === 0 || !formData.fullName || !formData.email || !formData.cardNumber || Object.values(errors).some(e => e !== '');

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
                <h2>Formulario de Compra</h2>
                <form id="ticketPurchaseForm" className="compra-form-grid" onSubmit={handleSubmit} noValidate>
                    <div className="form-column">
                        <div className="form-group">
                            <h3><i className="fas fa-user-circle"></i> Datos del Comprador</h3>
                            <div className="form-field">
                                <label htmlFor="fullName">Nombre completo</label>
                                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} onBlur={handleBlur} className={errors.fullName ? 'invalid' : ''} />
                                {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={errors.email ? 'invalid' : ''} />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                            <div className="form-field">
                                <label htmlFor="phone">Número de teléfono</label>
                                <input type="tel" id="phone" name="phone" placeholder="Ej: 1122334455" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={errors.phone ? 'invalid' : ''} />
                                {errors.phone && <div className="error-message">{errors.phone}</div>}
                            </div>
                            <div className="form-field">
                                <label htmlFor="dob">Fecha de nacimiento</label>
                                <input type="text" id="dob" name="dob" placeholder="DD/MM/AAAA" value={formData.dob} onChange={handleChange} onBlur={handleBlur} className={errors.dob ? 'invalid' : ''} />
                                {errors.dob && <div className="error-message">{errors.dob}</div>}
                            </div>
                             <div className="form-field">
                                <label htmlFor="country">País de residencia</label>
                                <select id="country" name="country" value={formData.country} onChange={handleChange} onBlur={handleBlur} className={errors.country ? 'invalid' : ''}>
                                    <option value="">Seleccione un país...</option>
                                    {countries.map(country => (
                                        <option key={country.iso2} value={country.nameES}>{country.nameES}</option>
                                    ))}
                                </select>
                                {errors.country && <div className="error-message">{errors.country}</div>}
                            </div>
                        </div>

                        <div className="form-group">
                            <h3><i className="fas fa-ticket-alt"></i> Datos del Evento</h3>
                            <div className="form-field">
                                <label htmlFor="event">Selección del Evento</label>
                                <select id="event" name="event" value={formData.event} onChange={handleChange} onBlur={handleBlur} className={errors.event ? 'invalid' : ''}>
                                    <option value="">Seleccione un evento...</option>
                                    {events.map((event, index) => (
                                        <option key={index} value={index}>
                                            {`${event.evento} - ${event.artista}`}
                                        </option>
                                    ))}
                                </select>
                                {errors.event && <div className="error-message">{errors.event}</div>}
                            </div>
                             <div className="form-field-group">
                                <div className="form-field">
                                    <label htmlFor="ticketType">Tipo de Entrada</label>
                                    <select id="ticketType" name="ticketType" value={formData.ticketType} onChange={handleChange} onBlur={handleBlur} className={errors.ticketType ? 'invalid' : ''}>
                                        <option value="">Seleccione tipo...</option>
                                        <option value="General">General</option>
                                        <option value="VIP">VIP</option>
                                        <option value="Palco">Palco</option>
                                    </select>
                                     {errors.ticketType && <div className="error-message">{errors.ticketType}</div>}
                                </div>
                                <div className="form-field">
                                    <label htmlFor="ticketQuantity">Cantidad</label>
                                    <input type="number" id="ticketQuantity" name="ticketQuantity" min="1" max="6" value={formData.ticketQuantity} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-column">
                        <div className="form-group">
                            <h3><i className="fas fa-credit-card"></i> Datos de Pago</h3>
                            <div className="form-field">
                                <label htmlFor="cardNumber">Número de tarjeta</label>
                                <div className="card-input-container">
                                    <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} onBlur={handleBlur} className={errors.cardNumber ? 'invalid' : ''} placeholder="•••• •••• •••• ••••" />
                                    <span className={`card-icon ${cardType}`}></span>
                                </div>
                                {errors.cardNumber && <div className="error-message">{errors.cardNumber}</div>}
                            </div>
                            <div className="form-field">
                                <label htmlFor="cardName">Nombre en la tarjeta</label>
                                <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} onBlur={handleBlur} className={errors.cardName ? 'invalid' : ''} />
                                {errors.cardName && <div className="error-message">{errors.cardName}</div>}
                            </div>
                            <div className="form-field-group">
                                <div className="form-field">
                                    <label htmlFor="expiryDate">Vencimiento</label>
                                    <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/AA" value={formData.expiryDate} onChange={handleChange} onBlur={handleBlur} className={errors.expiryDate ? 'invalid' : ''} />
                                    {errors.expiryDate && <div className="error-message">{errors.expiryDate}</div>}
                                </div>
                                <div className="form-field">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} onBlur={handleBlur} className={errors.cvv ? 'invalid' : ''} />
                                    {errors.cvv && <div className="error-message">{errors.cvv}</div>}
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-summary">
                            <h3>Resumen de Compra</h3>
                            <div className="timer" id="timerContainer">
                                <i className="fas fa-clock"></i> Tiempo restante: <span id="countdown">{`${Math.floor(timer / 60)}:${('0' + (timer % 60)).slice(-2)}`}</span>
                            </div>
                            {selectedEvent && formData.ticketType && formData.ticketQuantity > 0 ? (
                                <>
                                <p><strong>Evento:</strong> {selectedEvent.evento}</p>
                                <p><strong>Fecha:</strong> {new Date(selectedEvent.fecha + 'T00:00:00').toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <p><strong>Lugar:</strong> {selectedEvent.lugar}</p>
                                <p><strong>Entrada:</strong> {formData.ticketQuantity} x {formData.ticketType}</p>
                                <hr />
                                <p className="total-cost"><strong>Total:</strong> ${totalCost} {selectedEvent.moneda}</p>
                                </>
                            ) : (
                                <p className="summary-placeholder">Seleccione un evento, tipo y cantidad de entradas para ver el resumen.</p>
                            )}
                        </div>

                        <button type="submit" className="btn" id="submitButton" disabled={isSubmitDisabled}>
                            {isSubmitDisabled ? 'Complete el formulario' : `Pagar $${totalCost}`}
                        </button>
                    </div>
                </form>
            </section>
        </main>
        <footer>
            <p>© 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
        </footer>
      </>
    );
};

export default Compra;