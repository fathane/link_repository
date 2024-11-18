const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Assurez-vous de pointer vers votre configuration de base de données
const { createOrder } = require('../controllers/orderController');

// Route pour créer une nouvelle commande
router.post('/orders', createOrder);

// Route pour récupérer les commandes
router.get('/orders', (req, res) => {
    console.log("Requête pour récupérer les commandes reçue");
    const query = `
        SELECT o.id, o.total_price, o.status, d.name, d.surname, d.city, d.neighborhood, d.phone
        FROM orders o
        JOIN delivery_info d ON o.delivery_id = d.id
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error("Erreur lors de la récupération des commandes", err);
            return res.status(500).json({ message: 'Erreur lors de la récupération des commandes', error: err });
        }
        console.log("Commandes récupérées avec succès", results);
        res.json(results);
    });
});

// Route pour mettre à jour le statut d'une commande
router.put('/orders/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const query = 'UPDATE orders SET status = ? WHERE id = ?';

    db.query(query, [status, id], (err, result) => {
        if (err) {
            console.error("Erreur lors de la mise à jour du statut de la commande", err);
            return res.status(500).json({ message: 'Erreur lors de la mise à jour du statut de la commande', error: err });
        }
        console.log("Statut de la commande mis à jour avec succès", result);
        res.json({ message: 'Statut de la commande mis à jour avec succès' });
    });
});

module.exports = router;
