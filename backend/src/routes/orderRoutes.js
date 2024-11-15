const express = require('express');
const router = express.Router();
const db = require('../db'); // Connexion à la base de données MySQL

// Route pour créer une commande
router.post('/orders', (req, res) => {
  console.log('Données reçues:', req.body); // Log pour vérifier les données envoyées

  const { items, deliveryInfo, totalPrice } = req.body;

  // Vérifier si tous les champs nécessaires sont présents
  if (!deliveryInfo || !items || totalPrice == null) {
    return res.status(400).json({ error: 'Informations manquantes' });
  }

  // Insertion des données de livraison et du total dans la table orders
  const query = `
    INSERT INTO orders (user_id, name, surname, city, neighborhood, phone, total_price)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    1, // ID utilisateur fictif, remplacez-le avec la gestion réelle des utilisateurs
    deliveryInfo.recipientName,
    deliveryInfo.surname,
    deliveryInfo.city,
    deliveryInfo.neighborhood,
    deliveryInfo.phone,
    totalPrice,
  ];

  // Insertion dans la table `orders`
  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion de la commande:', err);
      return res.status(500).json({ error: 'Erreur lors de l\'insertion de la commande' });
    }

    const orderId = result.insertId; // ID de la commande insérée

    // Insertion des produits associés à la commande
    const orderItems = items.map(item => [
      orderId,    // L'ID de la commande
      item.id,    // L'ID du produit
      item.quantity,  // Quantité du produit
      item.price,     // Prix du produit
    ]);

    const insertOrderItemsQuery = `
      INSERT INTO order_items (order_id, product_id, quantity, price)
      VALUES ?
    `;

    db.query(insertOrderItemsQuery, [orderItems], (err) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des produits:', err);
        return res.status(500).json({ error: 'Erreur lors de l\'insertion des produits' });
      }

      res.status(200).json({ message: 'Commande et produits insérés avec succès!' });
    });
  });
});

module.exports = router;
