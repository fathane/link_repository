import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom'; // Ne pas importer BrowserRouter ici
import './menu.css';
import ValidateOrder from './components/ValidateOrder';
import Product from './components/Product';
import CartPage from './components/CartPage';
import Modal from './components/Modal';
import DeliveryPage from './components/DeliveryPage';
import ConfirmationPage from './components/ConfirmationPage'; // Ajout de ConfirmationPage
import AdminPage from './components/AdminPage'; // Ajout de AdminPage
import products from './productsData';

function App() {
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('tous');
    const [shuffledProducts, setShuffledProducts] = useState([]);

    // Mélanger les produits une seule fois au premier rendu
    useEffect(() => {
        const shuffleProducts = (products) => {
            return [...products].sort(() => Math.random() - 0.5);
        };
        setShuffledProducts(shuffleProducts(products));
    }, []); // [] signifie que ce code ne sera exécuté qu'une seule fois, au montage du composant

    // Filtrer les produits par catégorie, nom, et description
    const filteredProducts = useMemo(() => {
        const calculateRelevance = (product) => {
            let relevanceScore = 0;
            const searchLower = searchQuery.toLowerCase();
    
            // Calcul de la pertinence pour le nom, la catégorie et la description
            if (product.name.toLowerCase().includes(searchLower)) relevanceScore += 3; // Score plus élevé pour le nom
            if (product.category.toLowerCase().includes(searchLower)) relevanceScore += 2; // Score plus bas pour la catégorie
            if (product.description && product.description.toLowerCase().includes(searchLower)) relevanceScore += 1; // Score plus bas pour la description
    
            return relevanceScore;
        };
    
        // Filtrer les produits selon le filtre de catégorie et la recherche
        const filtered = shuffledProducts.filter(
            product =>
                (filter === 'tous' || product.category === filter) &&
                (
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
                )
        );
    
        // Ajouter un produit "moins pertinent" (ayant un score de pertinence égal à 0)
        const lessRelevantProducts = shuffledProducts.filter(
            product =>
                !(
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
                )
        );
    
        // Trier les produits filtrés par pertinence
        const sortedFilteredProducts = filtered.sort((a, b) => calculateRelevance(b) - calculateRelevance(a));
    
        // Retourner les produits triés et les moins pertinents
        return [...sortedFilteredProducts, ...lessRelevantProducts];
    }, [shuffledProducts, searchQuery, filter]); // Le tableau de dépendances inclut shuffledProducts, searchQuery et filter
    
    // Ajouter un produit au panier
    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += quantity;
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    // Supprimer un produit du panier
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    // Fonction pour vider le panier
    const emptyCart = () => {
        setCart([]);
    };

    // Afficher les détails d'un produit dans le Modal
    const handleProductClick = product => {
        setSelectedProduct(product);
    };

    // Calculer le nombre total d'articles dans le panier
    const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    // Calculer le prix total de la commande
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="App">
            {/* Image pleine largeur */}
            {/* Barre de recherche et icône du panier */}
            <div className="top-bar-first-line">
                <div className="logo-line">
                    <img src="link_logo.png" alt="Logo Whilf Rede" />
                </div>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Rechercher un produit ...."
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <Link to="/cart" className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">{totalItemsInCart}</span>
                </Link>
            </div>

            <div className="separator"></div>

            {/* Boutons de filtre les bouttons et leur categories*/}
            <div className="top-bar-second-line">
                <div className="filter-container">
                    {['tous', 'vetement', 'cuisine', 'electronic', 'decoration', 'mecanique'].map(category => (
                        <button
                            key={category}
                            className={`filter-button ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Routes */}
            <Routes>
                {/* Redirection de la route / vers /menu */}
                <Route path="/" element={<Navigate to="/menu" />} />

                {/* Page d'affichage des produits */}
                <Route
                    path="/menu"
                    element={
                        <div className="content">
                            {filteredProducts.map(product => (
                                <Product key={product.id} product={product} onProductClick={handleProductClick} />
                            ))}
                        </div>
                    }
                />

                {/* Page du panier */}
                <Route path="/cart" element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />} />

                {/* Page de livraison */}
                <Route path="/delivery" element={<DeliveryPage />} />

                {/* Page de validation de commande */}
                <Route
                    path="/validate-order"
                    element={<ValidateOrder cartItems={cart} totalPrice={totalPrice} onEmptyCart={emptyCart} />}
                />

                {/* Page de confirmation */}
                <Route path="/confirmation" element={<ConfirmationPage />} />

                {/* Page d'administration */}
                <Route path="/admin" element={<AdminPage />} />
            </Routes>

            {/* Modal pour afficher les détails du produit sélectionné */}
            {selectedProduct && (
                <Modal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onAddToCart={addToCart}
                />
            )}
        </div>
    );
}

export default App;
