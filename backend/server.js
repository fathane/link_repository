const express = require('express');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Configuration de CORS pour permettre les requêtes depuis le frontend
app.use(cors({
    origin: 'http://localhost:3000', // Adresse de votre frontend
}));

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Enregistrement des routes
app.use('/api', orderRoutes);

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Erreur interne du serveur' });
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
