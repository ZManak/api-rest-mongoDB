const express = require('express')
const productsApiController = require('../controllers/productsApiController')
const productsApiRoutes = express.Router();

// Rutas de API de productos

// GET http://localhost:3000/api/products
productsApiRoutes.get('/',productsApiController.getProducts);

// POST http://localhost:3000/api/products
productsApiRoutes.post('/',productsApiController.createProduct);

// DELETE
productsApiRoutes.delete('/', productsApiController.deleteProduct);


module.exports = productsApiRoutes;
