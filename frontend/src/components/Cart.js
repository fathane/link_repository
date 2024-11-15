import React from 'react';
import './cart.css';

function Cart({ cartItems, onRemoveFromCart }) {
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h2>Mon Panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imgSrc} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>Quantité: {item.quantity}</p>
                                <p>Prix: {item.price} FCFA</p>
                                <button 
                                    className="remove-button"
                                    onClick={() => onRemoveFromCart(item.id)}
                                >
                                    Retirer
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: {calculateTotalPrice()} FCFA</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
