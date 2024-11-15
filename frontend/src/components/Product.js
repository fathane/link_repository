import React from 'react';

function Product({ product, onProductClick }) {
    return (
        <div className="food-item" onClick={() => onProductClick(product)}>
            <img src={product.imgSrc} alt={product.name} />
            <div className="food-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <div className="price-section">
                    {product.originalPrice && (
                        <span className="original-price">{product.originalPrice} FCFA</span>
                    )}
                    <span className="price">{product.price} FCFA</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
