const express = require('express');
const session = require('express-session'); // Assurez-vous d'importer express-session
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utiliser une clé sécurisée générée
app.use(session({
    secret: 'd2c3987e9e42e3f403cb0c3a920ce71968b50eae4b5c313a638799b93a577731f2180dd407516c499172c0d7d5a0da1f1e53eb18de2816a0cd5e2d70655b3a29',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Importer et utiliser les routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
app.use('/api', authRoutes);
app.use('/api', adminRoutes);

// Démarrer le serveur
app.listen(5000, () => {
    console.log('Serveur en cours d\'exécution sur  https://link-repository.onrender.com');
});
