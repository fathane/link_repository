//src/components/CartPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';

function CartPage({ cart, onRemoveFromCart }) {  // Ajoutez la prop onRemoveFromCart
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const handleValidation = () => {
        if (cart.length > 0) {
            navigate('/delivery'); // Redirige vers la page de livraison si le panier contient des articles
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
                <button className="validate-button" onClick={handleValidation}>Valider</button>
            </div>

            {/* Affiche un message d'erreur si le panier est vide lors de la validation */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default CartPage;
