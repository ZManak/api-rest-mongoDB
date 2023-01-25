require('dotenv').config();
const express = require('express')
const cowsay = require('cowsay')

require('./utils/db_mongo');


// Módulos de Rutas
const productsApiRoutes = require('./routes/productsApiRoutes');
const providersApiRoutes = require('./routes/providersApiRoutes');
const error404 = require('./middlewares/error404');

const app = express()
const port = 3000

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
//app.use(error404); 
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("HOLA")
})

//Rutas 
app.use('/api/products',productsApiRoutes); // Rutas web API products
app.use('/api/providers', providersApiRoutes);


app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Server running on port ${port}`,
            e: "oO",
            T: "U "
        }))
})