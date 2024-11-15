// frontend/src/components/ValidateOrder.js
import React, { useState } from 'react';

const ValidateOrder = ({ items, totalPrice, onEmptyCart }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    surname: '',
    city: '',
    neighborhood: '',
    phone: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gérer les changements dans les champs de saisie
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  // Gérer la soumission de la commande
  const handleOrderSubmit = async () => {
    setIsSubmitting(true);
    setMessage('Envoi de la commande...');
  
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, deliveryInfo, totalPrice }),
      });
  
      if (response.ok) {
        const data = await response.json(); // Si vous souhaitez utiliser les données
        console.log('Réponse du backend:', data);
        setMessage('Commande validée avec succès!');
        onEmptyCart(); // Vider le panier après validation
      } else {
        setMessage('Erreur lors de la validation de la commande');
      }
    } catch (error) {
      console.error('Erreur lors de la communication avec le serveur:', error);
      setMessage('Impossible de se connecter au serveur');
    }
  
    setIsSubmitting(false);
  };
  
  return (
    <div>
      <h2>Valider la commande</h2>
      <input name="name" placeholder="Nom" onChange={handleInputChange} />
      <input name="surname" placeholder="Prénom" onChange={handleInputChange} />
      <input name="city" placeholder="Ville" onChange={handleInputChange} />
      <input name="neighborhood" placeholder="Quartier" onChange={handleInputChange} />
      <input name="phone" placeholder="Téléphone" onChange={handleInputChange} />
      <button onClick={handleOrderSubmit} disabled={isSubmitting}>Valider</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ValidateOrder;
