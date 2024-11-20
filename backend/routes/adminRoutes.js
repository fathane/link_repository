const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

router.get('/admin', authenticateToken, (req, res) => {
    res.send('Bienvenue sur la page admin');
});

module.exports = router;
