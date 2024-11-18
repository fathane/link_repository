// src/components/formulaire/login_register.js
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage({ onLogin }) {
    return (
        <div className="login-page">
            <h2>Se connecter</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                onLogin(); // Gérer la connexion
            }}>
                <div>
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Se connecter</button>
            </form>
            <div>
                Pas encore inscrit? <Link to="/signup">S'inscrire</Link>
            </div>
        </div>
    );
}

export default LoginPage;
