const express = require('express');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const db = require('../config/db');

const router = express.Router();

router.post('/link', [
    check('email').isEmail(),
    check('password').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    console.log(`Tentative de connexion : Email - ${email}, Password - ${password}`);
    try {
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) {
                console.error('Erreur lors de la connexion', err);
                return res.status(500).json({ error: 'Erreur lors de la connexion' });
            }
            if (results.length === 0) {
                console.error('Email non trouvé');
                return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
            }
            const isMatch = (password === results[0].password);
            console.log(`Correspondance du mot de passe : ${isMatch}`);
            if (!isMatch) {
                console.error('Mot de passe incorrect');
                return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
            }

            const token = jwt.sign({ userId: results[0].id }, 'SECRET_KEY');
            res.send({ token });
        });
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        res.status(500).send({ error: 'Erreur lors de la connexion' });
    }
});

module.exports = router;
