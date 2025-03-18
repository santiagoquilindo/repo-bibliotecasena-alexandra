const Usuario = require('../models/Usuario');

const getAllUsuarios = async () => {
    return await Usuario.findAll();
};

const createUsuario = async (usuarioData) => {
    return await Usuario.create(usuarioData);
};

module.exports = {
    getAllUsuarios,
    createUsuario,
};
