'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prestamos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaprestamo: {
        type: Sequelize.DATE
      },
      fechadevolucion: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.STRING
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Usuarios',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      idLibro: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Libros', //Nombre de la tabla referenciada
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prestamos');
  }
};