const jwt = require('jsonwebtoken');
const db = require('../config/db');

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(403).json({ error: 'Token non fourni' });
        }
        const decoded = jwt.verify(token, 'SECRET_KEY');
        db.query('SELECT * FROM users WHERE id = ?', [decoded.userId], (err, results) => {
            if (err || results.length === 0) {
                return res.status(403).json({ error: 'Utilisateur non trouvé' });
            }
            req.user = results[0];
            next();
        });
    } catch (error) {
        res.status(401).send({ error: 'Veuillez vous authentifier.' });
    }
};

module.exports = auth;
