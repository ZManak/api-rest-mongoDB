const express = require('express')
const providersApiController = require('../controllers/providersApiController')
const providersApiRoutes = express.Router();

// Rutas de API de productos

// GET http://localhost:3000/api/products
providersApiRoutes.get('/',providersApiController.getProviders);

// POST http://localhost:3000/api/products
providersApiRoutes.post('/',providersApiController.createProvider);

// DELETE
providersApiRoutes.delete('/', providersApiController.deleteProvider);

//UPDATE
providersApiRoutes.put('/', providersApiController.updateProvider);


module.exports = providersApiRoutes;