import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './auth.css';

function AdminLoginPage() {
    const [email, setEmail] = useState('✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.');
    const [password, setPassword] = useState('✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.');
    const [error, setError] = useState('✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(' https://link-repository.onrender.com/api/login', { email, password });
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            navigate('/admin'); // Rediriger vers /admin après une connexion réussie
        } catch (error) {
            setError('Email ou mot de passe incorrect');
        }
    };

    return (
        <div className="auth-container">
            <h1>Connexion</h1>
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
