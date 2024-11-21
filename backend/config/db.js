const express = require('express');
const { Pool } = require('pg');

const app = express();

// Configuration statique pour PostgreSQL
const PORT = 4000; // Port local
const DATABASE_CONFIG = {
    host: 'dpg-csve06jtq21c73engeh0-a.oregon-postgres.render.com',
    user: 'link_h8gh_user',
    password: 'G9gBKz6F5lan23WZmPZNAwvww6q8m2kh',
    database: 'link_h8gh',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
};

// Connexion à la base de données
const pool = new Pool(DATABASE_CONFIG);

pool.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        process.exit(1);
    }
    console.log('Connecté à la base de données PostgreSQL !');
});

// Endpoint de test
app.get('/', (req, res) => {
    res.send('Serveur backend opérationnel avec PostgreSQL !');
});

// Lancement du serveur
app.listen(PORT, () => {
    const isRender = DATABASE_CONFIG.host.includes('render');
    if (isRender) {
        console.log('Serveur en cours d\'exécution sur Render.');
    } else {
        console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
    }
});

module.exports = pool;
