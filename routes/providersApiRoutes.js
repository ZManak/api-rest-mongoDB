const express = require('express')
const providersApiController = require('../controllers/providersApiController')
const providersApiRoutes = express.Router();


providersApiRoutes.get('/',providersApiController.getProviders);

providersApiRoutes.post('/',providersApiController.createProvider);

providersApiRoutes.delete('/', providersApiController.deleteProvider);

providersApiRoutes.put('/', providersApiController.updateProvider);


module.exports = providersApiRoutes;