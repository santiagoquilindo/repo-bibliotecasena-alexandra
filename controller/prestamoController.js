const PrestamoService = require("../services/prestamoService");

class PrestamoController {
    static async getPrestamos(req, res) {
        try {
            let prestamos = await PrestamoService.obtenerPrestamos();
            res.json(prestamos);
        } catch (error) {
            res.json({ error: error });
        }
    }

    static async crearPrestamo(req, res) {
        try {
            let {fechaPrestamo, fechaDevolucion, estado} = req.body;// destructuring de un objeto
            let prestamo = await PrestamoService.crearPrestamo(fechaPrestamo, fechaDevolucion, estado);
            res.json(prestamo);
        } catch (error) {
            res.json({ error: error });
        }
    }

    static async eliminarPrestamo(req, res) {
        try {
            let id = req.params.id;
            let prestamo = await PrestamoService.eliminarPrestamo(id);
            res.json({" prestamo eliminado": prestamo});
        } catch (error) {
            res.json({ error: error });
        }
    }  
    
    static async actualizarporId(req, res) {
        try {
            let id = req.params.id;
            let {fechaPrestamo, fechaDevolucion, estado} = req.body;// destructuring de un objeto
            let prestamo = await PrestamoService.actualizarporId(id, fechaPrestamo, fechaDevolucion, estado);
            res.json({ prestamo});
        } catch (error) {
            res.json({ error: error });
        }
    }

    static async buscarPrestamoPorId(req, res) {
        try {
            let id = req.params.id;
            let prestamo = await PrestamoService.buscarPrestamoPorId(id);
            res.json({ prestamo});
        } catch (error) {
            res.json({ error: error });
        }
    }
}

module.exports = PrestamoController