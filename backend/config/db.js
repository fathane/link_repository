const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Akorede1234!',
    database: 'LINK'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        process.exit(1);
    }
    console.log('Connecté à la base de données');
});

module.exports = db;
