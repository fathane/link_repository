const db = require('../config/db');

const createOrder = (req, res) => {
    const { items, deliveryInfo, totalPrice } = req.body;
    console.log('Requête reçue:', JSON.stringify(req.body, null, 2)); // Log complet des données reçues

    // Vérification des données
    if (!items || !deliveryInfo || !totalPrice) {
        return res.status(400).json({ message: 'Données manquantes dans la requête.' });
    }

    const queryDelivery = 'INSERT INTO delivery_info (name, surname, city, neighborhood, phone) VALUES (?, ?, ?, ?, ?)';
    db.query(queryDelivery, [deliveryInfo.name, deliveryInfo.surname, deliveryInfo.city, deliveryInfo.neighborhood, deliveryInfo.phone], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout des informations de livraison:', err);
            return res.status(500).json({ message: 'Erreur lors de l\'ajout des informations de livraison.', error: err });
        }

        const deliveryId = result.insertId;
        console.log('Informations de livraison ajoutées avec l\'ID:', deliveryId);

        const queryOrder = 'INSERT INTO orders (delivery_id, total_price) VALUES (?, ?)';
        db.query(queryOrder, [deliveryId, totalPrice], (err, result) => {
            if (err) {
                console.error('Erreur lors de la création de la commande:', err);
                return res.status(500).json({ message: 'Erreur lors de la création de la commande.', error: err });
            }

            const orderId = result.insertId;
            console.log('Commande créée avec l\'ID:', orderId);

            if (!Array.isArray(items)) {
                return res.status(400).json({ message: 'Les articles doivent être un tableau.' });
            }

            const orderItems = items.map(item => [orderId, item.name, item.price, item.quantity]);
            const queryOrderItems = 'INSERT INTO order_items (order_id, product_name, product_price, quantity) VALUES ?';
            db.query(queryOrderItems, [orderItems], (err) => {
                if (err) {
                    console.error('Erreur lors de l\'ajout des articles à la commande:', err);
                    return res.status(500).json({ message: 'Erreur lors de l\'ajout des articles à la commande.', error: err });
                }

                console.log('Articles de la commande ajoutés avec succès pour la commande ID:', orderId);
                res.status(201).json({ message: 'Commande validée avec succès', orderId });
            });
        });
    });
};

module.exports = { createOrder };