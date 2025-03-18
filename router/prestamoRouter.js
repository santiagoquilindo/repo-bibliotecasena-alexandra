const express = require("express");
const PrestamoController = require('../controllers/prestamoController');
const router = require("express").Router();

router.get("/prestamo", PrestamoController.getPrestamos);
router.post("/prestamo", PrestamoController.crearPrestamo);
router.delete("/prestamo/:id", PrestamoController.eliminarPrestamo);
router.put("/prestamo/:id", PrestamoController.actualizarporId);
router.get("/prestamo/:id", PrestamoController.buscarPrestamoPorId);

module.exports = router;