const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = 'secret_key';

// Middleware pour authentifier l'accès
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Accès interdit : token manquant' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalide' });
        }
        req.user = user;
        next();
    });
}

// Route protégée
router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'Bienvenue sur la page admin sécurisée' });
});

module.exports = router;