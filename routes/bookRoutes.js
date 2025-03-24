const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

// CRUD des livres
router.post('/', authMiddleware, bookController.createBook); // Protégé par JWT
router.get('/', bookController.getAllBooks); // Public
router.get('/:id', bookController.getBookById); // Public
router.put('/:id', authMiddleware, bookController.updateBook); // Protégé par JWT
router.delete('/:id', authMiddleware, bookController.deleteBook); // Protégé par JWT

module.exports = router;
