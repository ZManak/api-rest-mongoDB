const mongoose = require("mongoose");
const DATABASE_URL = process.env.DB_URL
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;