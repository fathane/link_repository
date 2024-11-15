import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './delivery.css';

function DeliveryPage({ cartItems }) {
    const [deliveryInfo, setDeliveryInfo] = useState({
        recipientName: '',
        city: '',
        address: '',
        phone: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
        setErrorMessage(''); // Réinitialiser le message d'erreur lors de la modification
    };
    const handleConfirm = async () => {
        if (Object.values(deliveryInfo).every(value => value)) {
            // Si toutes les informations sont présentes, envoyer la commande au backend
            try {
                const response = await fetch('http://localhost:5000/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        items: cartItems, // Passer les éléments du panier
                        deliveryInfo: deliveryInfo,
                        totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0) // Calculer le prix total
                    }),
                });
    
                if (response.ok) {
                    await response.json(); // Supprimer l'assignation à 'data' ici
                    alert('Commande confirmée et envoyée au serveur !');
                    navigate('/'); // Redirige vers la page d'accueil après la confirmation
                    setDeliveryInfo({ recipientName: '', city: '', address: '', phone: '' }); // Réinitialiser les informations de livraison
                    setErrorMessage('');
                } else {
                    alert('Erreur lors de l\'envoi des informations de commande.');
                    setErrorMessage('Erreur lors de l\'envoi des informations de commande.');
                }
            } catch (error) {
                alert('Erreur de connexion avec le serveur:');
                alert('Impossible de se connecter au serveur');
                console.error('Erreur de connexion avec le serveur:', error);
                setErrorMessage('Impossible de se connecter au serveur');
            }
        } else {
            setErrorMessage('Veuillez entrer toutes les informations de livraison.');
        }
    };
    
    return (
        <div className="delivery-page">
            <button className="back-button" onClick={() => navigate(-1)}>Retour</button>
            <h2>Informations de Livraison</h2>
            <form>
                <label>Nom du récepteur</label>
                <input
                    name="recipientName"
                    value={deliveryInfo.recipientName}
                    onChange={handleChange}
                    placeholder="Entrez le nom du récepteur"
                    required
                />

                <label>Ville</label>
                <input
                    name="city"
                    value={deliveryInfo.city}
                    onChange={handleChange}
                    placeholder="Entrez la ville"
                    required
                />

                <label>Adresse</label>
                <input
                    name="address"
                    value={deliveryInfo.address}
                    onChange={handleChange}
                    placeholder="Entrez l'adresse de livraison"
                    required
                />

                <label>Numéro de téléphone</label>
                <input
                    name="phone"
                    value={deliveryInfo.phone}
                    onChange={handleChange}
                    placeholder="Entrez le numéro de téléphone"
                    required
                />
            </form>
            
            <p className="payment-info">
             Le paiement se fera lors de la livraison.
            </p>
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            
            <div className="button-group">
                <button type="button" onClick={handleConfirm}>Confirmer la commande</button>
                <button className="cancel-button" onClick={() => navigate(-1)}>Annuler</button>
            </div>
        </div>
    );
}

export default DeliveryPage;
