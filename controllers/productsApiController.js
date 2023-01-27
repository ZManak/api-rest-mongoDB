const Product = require('../models/products');
const Provider = require('../models/providers');

const getProducts = async (req, res) => {
    try {
        let products = await Product.find({}, '-_id -__v').populate('provider', '-_id -__v');
        res.status(200).json(products);
    }
    catch (err) {
        res.status(400).json({ msj: err.message });
    }
}

const createProduct = async (req, res) => {
    try {
        let company_id = await Provider.findOne({ company_name: req.body.provider }, '_id').exec();
        const newProduct = req.body; // {title, , price, description, provider: company_name}
        newProduct.provider = company_id;
        let response = await new Product(newProduct);
        let answer = await response.save();
        res.status(201).json({
            msj: `Producto ${answer.title} guardado en el sistema.`,
            "product": answer
        });
    } catch (err) {
        res.status(400).json({ msj: err.message });

    }
}

const deleteProduct = async (req, res) => {
    try {
        let answer = await Product.findOneAndDelete({ title: req.body.title });
        res.status(200).json({
            msj: `Producto ${answer.title} eliminado del sistema.`,
            product: answer
        })
    }
    catch (err) {
        res.status(400).json({ msj: err.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        let newProvider = await Provider.findOne({ company_name: req.body.newProvider }, '_id').exec();
        const updatedProduct = req.body;
        updatedProduct.newProvider = newProvider;
        let response = await Product.findOneAndUpdate({ title: updatedProduct.title }, { title: updatedProduct.newTitle, price: updatedProduct.newPrice, description: updatedProduct.newDescription, provider: updatedProduct.newProvider }, { returnDocument: 'after' });
        res.status(200).json({
            msj: `Producto actualizado.`,
            product: response
        })
    }
    catch (err) {
        res.status(400).json({ msj: err.message });
    }
}
module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
}


