const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes'); // Ajoutez cette ligne

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`); // Log chaque requête
    next();
});

// Utiliser les routes définies
app.use('/api', authRoutes);
app.use('/api', orderRoutes); // Ajoutez cette ligne

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
