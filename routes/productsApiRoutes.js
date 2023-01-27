const express = require('express')
const productsApiController = require('../controllers/productsApiController')
const productsApiRoutes = express.Router();

productsApiRoutes.get('/',productsApiController.getProducts);

productsApiRoutes.post('/',productsApiController.createProduct);

productsApiRoutes.delete('/', productsApiController.deleteProduct);

productsApiRoutes.put('/', productsApiController.updateProduct);


module.exports = productsApiRoutes;
