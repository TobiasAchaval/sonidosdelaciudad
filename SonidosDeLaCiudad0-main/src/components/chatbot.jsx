import React, { useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa";
import "../style.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! ¿En qué puedo ayudarte?" },
    {
      from: "bot",
      text:
        "Podés preguntarme cosas como:\n• ¿Dónde es el festival?\n• ¿Cuándo se realiza?\n• ¿Qué artistas tocan?\n• ¿Cómo consigo entradas?"
    }
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setOpen(!open);
    if (!open) {
      setMessages([
        { from: "bot", text: "¡Hola! ¿En qué puedo ayudarte?" },
        {
          from: "bot",
          text:
            "Podés preguntarme cosas como:\n• ¿Dónde es el festival?\n• ¿Cuándo se realiza?\n• ¿Qué artistas tocan?\n• ¿Cómo consigo entradas?"
        }
      ]);
    }
  };

  const getBotResponse = (txt) => {
    const t = txt.toLowerCase();
    if (t.includes("entrada")) return "Podés comprar tus entradas en la sección 'Entradas'.";
    if (t.includes("ubicación") || t.includes("dónde")) return "El festival se hará en el Parque Central.";
    if (t.includes("artistas") || t.includes("quién")) return "Están Jorge Véliz, Skrillex, Dread Mar-I y Calamaro.";
    if (t.includes("cuándo") || t.includes("fecha")) return "Del 8 al 10 de noviembre de 2025.";
    return "No estoy seguro, pero podés explorar el sitio para más info.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: getBotResponse(input) }]);
    }, 600);
  };

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
        </div>

        <div className="chatbot-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu mensaje..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
      </div>

      <button className="chatbot-toggle" onClick={toggleChat}>
        <FaRobot size={20} />
      </button>
    </div>
  );
};

export default ChatBot;
