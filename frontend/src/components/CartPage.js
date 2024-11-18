import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './cart.css';

function CartPage({ cart, onRemoveFromCart }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const handleValidation = async () => {
        if (cart.length > 0) {
            setIsLoading(true);
            try {
                const orderData = {
                    items: cart,
                    totalPrice: calculateTotal(),
                };
                console.log("Données de commande envoyées:", orderData);

                const response = await axios.post('http://localhost:5000/api/orders', orderData);
                console.log("Réponse du serveur:", response.data);

                navigate('/delivery');
            } catch (error) {
                console.error('Erreur lors de la validation du panier:', error.response ? error.response.data : error.message);
                setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
            }
            setIsLoading(false);
        } else {
            setErrorMessage('Votre panier est vide. Ajoutez des articles avant de valider la commande.');
        }
    };

    return (
        <div className="cart-page">
            <button className="back-button" onClick={() => navigate(-1)}>Retour</button>
            
            <h2>Votre Panier</h2>
            <div id="cart-items">
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.imgSrc} alt={item.name} className="cart-item-image" />
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-quantity">Quantité: {item.quantity}</span>
                            <span className="cart-item-price">Prix unitaire: {item.price}FCFA</span>
                            <span className="cart-item-total">Total: {item.quantity * item.price}FCFA</span>
                            <button onClick={() => onRemoveFromCart(item.id)} className="remove-button">
                                Supprimer
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Votre panier est vide</p>
                )}
            </div>
            <div className="cart-summary">
                <span className="total-general">Total Général ({cart.length} articles) = {calculateTotal()}FCFA</span>
                <button className="validate-button" onClick={handleValidation} disabled={isLoading}>
                    {isLoading ? 'Validation en cours...' : 'Valider'}
                </button>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default CartPage;
