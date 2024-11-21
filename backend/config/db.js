const { Client } = require('pg');

// Connexion complète à la base de données PostgreSQL avec Render
const db = new Client({
    connectionString: 'postgresql://postgres:UEzqYJwUBTYjsoRVUdtfLWkPOkGlqohC@junction.proxy.rlwy.net:18796/railway',
    ssl: { rejectUnauthorized: false }
});

// Assurez-vous que la connexion est établie une seule fois
db.connect()
  .then(() => console.log('Connecté à la base de données PostgreSQL'))
  .catch((err) => {
    console.error('Erreur de connexion à la base de données PostgreSQL:', err);
    process.exit(1);  // Fermer l'application si la connexion échoue
  });

module.exports = db;
