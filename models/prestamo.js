'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestamo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prestamo.belongsTo(models.Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuarios'
      });

      Prestamo.belongsTo(models.Libro, {
        foreignKey: 'idLibro',
        as: 'libros'
      });
      // define association here
    }
  }
  Prestamo.init({
    fechaprestamo: DataTypes.DATE,
    fechadevolucion: DataTypes.DATE,
    estado: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER,
    idLibro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prestamo',
  });
  return Prestamo;
};