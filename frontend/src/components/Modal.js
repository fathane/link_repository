import React, { useState } from 'react';
import '../menu.css';

function Modal({ product, onClose, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);
    const [showVideo, setShowVideo] = useState(false); // État pour basculer entre image et vidéo

    if (!product) return null;

    const handleAddToCart = () => {
        onAddToCart(product, quantity);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{product.name}</h2>
                {showVideo ? (
                    <video src={product.videoSrc} controls className="modal-product-video"></video>
                ) : (
                    <img src={product.imgSrc} alt={product.name} className="modal-product-image" />
                )}
                <p>Prix: {product.price} FCFA</p>
                <p>Stock: <span style={{ color: 'green' }}>{product.stock}</span></p> {/* Texte de couleur */}
                <p className="modal-description">{product.modalDescription || product.description}</p>
                <div className="quantity-container">
                    <label>Quantité:</label>
                    <input 
                        type="number"
                        value={quantity} 
                        min="1" 
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                </div>

                <div className="view-buttons">
                    <button onClick={() => setShowVideo(false)}>Image</button>
                    <button onClick={() => setShowVideo(true)}>Vidéo</button>
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
