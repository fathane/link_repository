import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './auth.css'; // Assurez-vous que ce chemin est correct

function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log('Tentative de connexion:', { email, password }); // Log des informations envoyées
        try {
            const response = await axios.post('http://localhost:5000/api/link', { email, password });
            console.log('Réponse:', response.data); // Log de la réponse du backend
            localStorage.setItem('token', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            navigate('/admin');
        } catch (error) {
            console.error('Erreur de connexion:', error.response ? error.response.data : error.message);
            setError('Email ou mot de passe incorrect');
        }
    };

    return (
        <div className="auth-container">
            <h1>Connexion Admin</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
            />
            <button onClick={handleLogin}>Se connecter</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default AdminLoginPage;
