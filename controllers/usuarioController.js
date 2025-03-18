// controllers/usuarioController.js
const usuarioService = require('../services/usuarioService');

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error obteniendo usuarios', error: error.message });
    }
};

const createUsuario = async (req, res) => {
    try {
        const usuario = await usuarioService.createUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error creando usuario', error: error.message });
    }
};

module.exports = {
    getUsuarios,
    createUsuario,
};
