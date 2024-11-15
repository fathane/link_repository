const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Pour autoriser les requêtes venant de votre frontend

const app = express();
const port = 5000;

// Middleware pour gérer les données JSON
app.use(express.json());
app.use(cors());  // Autoriser les requêtes cross-origin

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Utilisateur MySQL
  password: 'Akorede1234', // Mot de passe
  database: 'DB', // Nom de la base de données
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données');
});

// Route pour créer une commande
app.post('/api/orders', (req, res) => {
  const { items, deliveryInfo, totalPrice } = req.body;

  // Créer une commande dans la base de données
  const orderQuery = 'INSERT INTO orders (recipient_name, city, address, phone, total_price) VALUES (?, ?, ?, ?, ?)';
  const orderValues = [
    deliveryInfo.recipientName,
    deliveryInfo.city,
    deliveryInfo.address,
    deliveryInfo.phone,
    totalPrice,
  ];

  db.query(orderQuery, orderValues, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de la commande:', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }

    const orderId = result.insertId;

    // Ajouter les articles de la commande dans la table order_items
    const orderItemsQuery = 'INSERT INTO order_items (order_id, product_id, quantity) VALUES ?';
    const orderItemsValues = items.map(item => [orderId, item.id, item.quantity]);

    db.query(orderItemsQuery, [orderItemsValues], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout des articles à la commande:', err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }

      // Si tout se passe bien, renvoyer la confirmation de la commande
      res.status(200).json({ message: 'Commande confirmée et enregistrée', orderId });
    });
  });
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
