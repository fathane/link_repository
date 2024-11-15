// src/components/Modal.js
import React, { useState } from 'react';
import '../menu.css';

function Modal({ product, onClose, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    const handleAddToCart = () => {
        onAddToCart(product, quantity);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{product.name}</h2>
                <img src={product.imgSrc} alt={product.name} className="modal-product-image" />
                <p>Prix: {product.price} FCFA</p>
                <p className="modal-description">{product.modalDescription || product.description}</p> {/* Apply modal-description class */}
                <div className="quantity-container">
                    <label>Quantité:</label>
                    <input 
                        type="number"
                        value={quantity} 
                        min="1" 
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                </div>

                <div className="modal-buttons">
                    <button onClick={handleAddToCart}>Ajouter au panier</button>
                    <button className="cancel-button" onClick={onClose}>Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
