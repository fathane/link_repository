const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Akorede1234',
  database: 'DB'
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
    process.exit(1);
  } else {
    console.log("Connecté à la base de données MySQL DB");
  }
});

module.exports = connection;
