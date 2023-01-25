require('dotenv').config();
const express = require('express')
const cowsay = require('cowsay')

require('./utils/db_mongo'); // conectarse a la BBDD Mongo
const error404 = require('./middlewares/error404')

// Módulos de Rutas
const productsApiRoutes = require('./routes/productsApiRoutes');
const providersApiRoutes = require('./routes/providersApiRoutes');
const providersApiRoutes = require('./routes/providersApiRoutes');


const app = express()
const port = 3000

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("HOLA")
})

//Rutas 
app.use('/api/products',productsApiRoutes); // Rutas web API products
app.use('/api/providers', providersApiRoutes);
app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Server running on port ${port}`,
            e: "oO",
            T: "U "
        }))
})