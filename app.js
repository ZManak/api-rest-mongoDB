require('dotenv').config();
const express = require('express')
const cowsay = require('cowsay')
require('./utils/db_mongo');

const productsApiRoutes = require('./routes/productsApiRoutes');
const providersApiRoutes = require('./routes/providersApiRoutes');

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.use('/api/products',productsApiRoutes);
app.use('/api/providers', providersApiRoutes);


app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Server running on port ${port}`,
            e: "oO",
            T: "U "
        }))
})