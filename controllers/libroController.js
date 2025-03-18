// controllers/libroController.js
const libroService = require('../services/libroService');

const getLibros = async (req, res) => {
    try {
        const libros = await libroService.getAllLibros();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ message: 'Error obteniendo libros', error: error.message });
    }
};

const createLibro = async (req, res) => {
    try {
        const libro = await libroService.createLibro(req.body);
        res.status(201).json(libro);
    } catch (error) {
        res.status(500).json({ message: 'Error creando libro', error: error.message });
    }
};

module.exports = {
    getLibros,
    createLibro,
};
