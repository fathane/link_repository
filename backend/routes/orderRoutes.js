const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Assurez-vous de pointer vers votre configuration de base de données
const { createOrder } = require('../controllers/orderController');

// Route pour créer une nouvelle commande
router.post('/orders', createOrder);

// Route pour récupérer les commandes avec les articles commandés
// router.get('/orders', async (req, res) => {
//     console.log("Requête pour récupérer les commandes reçue");
//     const query = `
//         SELECT o.id AS order_id, o.total_price, o.status, d.name, d.surname, d.city, d.neighborhood, d.phone,
//                i.product_name, i.product_price, i.quantity
//         FROM orders o
//         JOIN delivery_info d ON o.delivery_id = d.id
//         JOIN order_items i ON o.id = i.order_id
//     `;
    
//     try {
//         const result = await db.query(query);

//         if (result.rows.length === 0) {
//             return res.status(404).json({ message: 'Aucune commande trouvée' });
//         }

//         const orders = result.rows.reduce((acc, row) => {
//             const { order_id, total_price, status, name, surname, city, neighborhood, phone, product_name, product_price, quantity } = row;
//             if (!acc[order_id]) {
//                 acc[order_id] = {
//                     id: order_id,
//                     total_price,
//                     status,
//                     name,
//                     surname,
//                     city,
//                     neighborhood,
//                     phone,
//                     products: []
//                 };
//             }
//             acc[order_id].products.push({ product_name, product_price, quantity });
//             return acc;
//         }, {});

//         console.log("Commandes récupérées avec succès", Object.values(orders));
//         res.json(Object.values(orders));
//     } catch (error) {
//         console.error("Erreur lors de la récupération des commandes", error);
//         res.status(500).json({ message: 'Erreur lors de la récupération des commandes', error: error });
//     }
// });


router.get('/orders', async (req, res) => {
    console.log("Requête pour récupérer les commandes reçue");
    const query = `
        SELECT o.id AS order_id, o.total_price, o.status, o.promo_code, 
               d.name, d.surname, d.city, d.neighborhood, d.phone,
               i.product_name, i.product_price, i.quantity
        FROM orders o
        JOIN delivery_info d ON o.delivery_id = d.id
        JOIN order_items i ON o.id = i.order_id
    `;
    
    try {
        const result = await db.query(query);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Aucune commande trouvée' });
        }

        const orders = result.rows.reduce((acc, row) => {
            const { order_id, total_price, status, promo_code, name, surname, city, neighborhood, phone, product_name, product_price, quantity } = row;
            if (!acc[order_id]) {
                acc[order_id] = {
                    id: order_id,
                    total_price,
                    status,
                    promo_code,
                    name,
                    surname,
                    city,
                    neighborhood,
                    phone,
                    products: []
                };
            }
            acc[order_id].products.push({ product_name, product_price, quantity });
            return acc;
        }, {});

        console.log("Commandes récupérées avec succès", Object.values(orders));
        res.json(Object.values(orders));
    } catch (error) {
        console.error("Erreur lors de la récupération des commandes", error);
        res.status(500).json({ message: 'Erreur lors de la récupération des commandes', error: error });
    }
});

// Route pour mettre à jour le statut d'une commande
router.put('/orders/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const query = 'UPDATE orders SET status = $1 WHERE id = $2';

    try {
        const result = await db.query(query, [status, id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Commande non trouvée' });
        }

        console.log("Statut de la commande mis à jour avec succès", result);
        res.json({ message: 'Statut de la commande mis à jour avec succès' });
    } catch (error) {
        console.error("Erreur lors de la mise à jour du statut de la commande", error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du statut de la commande', error: error });
    }
});

module.exports = router;
