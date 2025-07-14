import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaUser } from "react-icons/fa";
import "../style.css";

// 1. Importamos la imagen del chatbot desde 'src/assets'
import chatbotLogo from '../assets/chatbot.png';

const initialMessages = [
  { from: "bot", text: "¡Hola! ¿En qué puedo ayudarte?" },
  {
    from: "bot",
    text: "Podés preguntarme cosas como:\n• ¿Dónde es el festival?\n• ¿Cuándo se realiza?\n• ¿Qué artistas tocan?\n• ¿Cómo consigo entradas?"
  }
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const getBotResponse = (txt) => {
    const t = txt.toLowerCase();
    
    if (t.match(/(entrada|ticket|comprar)/)) return "Podés comprar tus entradas en la sección 'Entradas'.";
    if (t.match(/(ubicación|donde|dónde)/)) return "El festival se hará en el Parque Central.";
    if (t.match(/(artista|quien|quién|toca)/)) return "Están Jorge Véliz, Skrillex, Dread Mar-I y Calamaro.";
    if (t.match(/(cuando|cuándo|fecha)/)) return "Del 8 al 10 de noviembre de 2025.";
    
    return "No estoy seguro, pero podés explorar el sitio para más info.";
  };

  const toggleChat = () => {
    setOpen(!open);
    if (!open) {
      setMessages(initialMessages);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
    }, 1000); 
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="chatbot-container">
      <div className={`chatbot-window ${open ? "open" : ""}`}>
        <div className="chatbot-header">Asistente Virtual</div>
        <div className="chatbot-messages">
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.from}`}>
              {m.from === "bot" ? <FaRobot className="msg-icon" /> : <FaUser className="msg-icon" />}
              <p>
                {m.text.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
          {isTyping && (
            <div className="message bot typing">
              <FaRobot className="msg-icon" />
              <p>El asistente está escribiendo...</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatbot-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu mensaje..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isTyping}
          />
          <button onClick={handleSend} disabled={isTyping}>Enviar</button>
        </div>
      </div>
      <button className="chatbot-toggle" onClick={toggleChat}>
        {/* 2. Usamos la variable importada en el 'src' */}
        <img src={chatbotLogo} alt="Chatbot Logo" style={{ width: '40px', height: '40px' }} />
      </button>
    </div>
  );
};

export default ChatBot;