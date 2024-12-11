import React, { useState } from "react";
import "../assets/css/Contact.css";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    if (message.length > 300) {
      setError("Le message doit contenir moins de 300 caractères.");
      return;
    }

    setError("");
    setFormSubmitted(true);

    // Simuler l'envoi du message
    console.log({ email, message });
  };

  return (
    <div className="contact-form">
      <h1>Contactez-nous</h1>
      {formSubmitted ? (
        <p className="success-message">
          Demande de contact envoyée avec succès.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Entrez votre email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={300}
              required
              placeholder="Entrez votre message"
            ></textarea>
            <small>{message.length}/300</small>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-btn">
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
