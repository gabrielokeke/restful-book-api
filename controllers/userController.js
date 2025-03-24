const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Créer un utilisateur (inscription)
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();

    // Générer un JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({ message: 'Utilisateur créé avec succès', token });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription', error: err });
  }
};

// Se connecter (login)
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    // Générer un JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ message: 'Connexion réussie', token });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la connexion', error: err });
  }
};
