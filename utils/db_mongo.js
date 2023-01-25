const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const DATABASE_URL = process.env.DB_URL
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;