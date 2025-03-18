// routes/libroRoutes.js
const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.get('/libros', libroController.getLibros);
router.post('/libros', libroController.createLibro);

module.exports = router;
