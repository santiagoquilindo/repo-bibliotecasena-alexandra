// services/libroService.js
const Libro = require('../models/Libro');

const getAllLibros = async () => {
    return await Libro.findAll();
};

const createLibro = async (libroData) => {
    return await Libro.create(libroData);
};

module.exports = {
    getAllLibros,
    createLibro,
};
