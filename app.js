require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

// Connexion à la base de données MongoDB
 mongoose.connect(process.env.URI)
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch((error) => console.log('Erreur de connexion à MongoDB:', error));

// Routes
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/users', userRoutes);

module.exports = app;
