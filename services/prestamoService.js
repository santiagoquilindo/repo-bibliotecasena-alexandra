const {Prestamo} = require('../models');
class PrestamoService {
    static async obtenerPrestamos() {
        try {
            return await Prestamo.findAll();
        } catch (error) {
            console.log(error);
        }
    }

    static async crearPrestamo(fechaPrestamo, fechaDevolucion, estado) {
        try {
            return await Prestamo.create({fechaPrestamo, fechaDevolucion, estado});
        } catch (error) {
            console.log(error);
        }
    }

    static async buscarPrestamoPorId(id) {
        try {
            return await Prestamo.findByPk(id);
        } catch (error) {
            console.log(error);
        }
    }

    static async eliminarPrestamo(id) {
        try {
            let res = await Prestamo.findByPk(id);
            if(res) {
                  await Prestamo.destroy({where: {id}});
                  return "prestamo eliminado";
            }
            return "prestamo no encontrado";
        } catch (error) {
            console.log(error);
        }
    }

    static async actualizarporId( fechaPrestamo, fechaDevolucion, estado) {
        try {
            let res = await Prestamo.findByPk(id);
            if(!res) {
                return "prestamo no encontrado";
            }
            return await Prestamo.update({fechaPrestamo, fechaDevolucion, estado}, {where: {id}});  
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = PrestamoService