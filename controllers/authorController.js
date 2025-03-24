const Author = require('../models/author');

// Créer un auteur
exports.createAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const author = new Author({ name, bio });
    await author.save();
    res.status(201).json(author);
  } catch (err) {
    console.error('Erreur lors de la création de l\'auteur:', err);
    res.status(500).json({ message: 'Erreur lors de la création de l\'auteur', error: err });
  }
};

// Retrieve all authors
const Author = require('../models/author');

// Get all authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find(); // Fetch all authors
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des auteurs', error: err });
  }
};


// Lire un auteur spécifique
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: 'Auteur non trouvé' });
    }
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'auteur', error: err });
  }
};

// Modifier un auteur
exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!author) {
      return res.status(404).json({ message: 'Auteur non trouvé' });
    }
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la modification de l\'auteur', error: err });
  }
};

// Supprimer un auteur
exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ message: 'Auteur non trouvé' });
    }
    res.status(200).json({ message: 'Auteur supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'auteur', error: err });
  }
};
