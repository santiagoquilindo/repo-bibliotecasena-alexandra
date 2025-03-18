'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {

    static associate(models) {
      Libro.hasMany(models.Prestamo, {
        foreignKey: 'idLibro',
        as: 'prestamos'
      })
    }
  }
  Libro.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    anopublicacion: DataTypes.DATE,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};