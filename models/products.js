const mongoose = require('mongoose');
const objectSchema = {
    title: { 
        type: String, 
        required: true,
        unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Provider'
    }
};

const productSchema = mongoose.Schema(objectSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;


/* Modelo de producto
const p = new Product({
    title: "Name",
    price: 1,
    description: "Description goes here",
    provider: "provider name"
});
*/