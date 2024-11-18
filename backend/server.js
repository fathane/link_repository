const express = require('express');
const cors = require('cors');
const app = express();
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./middleware/errorHandler');

// Configuration de CORS
app.use(cors({
    origin: 'http://localhost:3000' // URL du frontend
}));

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Routes pour les commandes
app.use('/api', orderRoutes);

// Middleware pour la gestion des erreurs
app.use(errorHandler);

// Démarrer le serveur
app.listen(5000, () => {
    console.log('Serveur en cours d\'exécution sur http://localhost:5000');
});
