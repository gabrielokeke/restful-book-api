const Book = require('../models/book');

// Créer un livre
exports.createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;
    const book = new Book({ title, author, publishedYear, genre });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    console.error('Erreur lors de la création du livre:', err);
    res.status(500).json({ message: 'Erreur lors de la création du livre', error: err });
  }
};

// Retrieve all books with author populated
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('author');
    res.status(200).json(books);
  } catch (err) {
    console.error('Erreur lors de la récupération des livres:', err);
    res.status(500).json({ message: 'Erreur lors de la récupération des livres', error: err });
  }
};

// Lire un livre spécifique
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('author');
    if (!book) {
      return res.status(404).json({ message: 'Livre non trouvé' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération du livre', error: err });
  }
};

// Modifier un livre
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Livre non trouvé' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la modification du livre', error: err });
  }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Livre non trouvé' });
    }
    res.status(200).json({ message: 'Livre supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression du livre', error: err });
  }
};
