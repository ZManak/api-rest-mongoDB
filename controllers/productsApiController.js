// Controlador - Lógica de negocio de la app
const Product = require('../models/products');
const Provider = require('../models/providers');
const mongoose = require('mongoose');

const getProducts = async (req,res) => {
        try {
            let products = await Product.find({},'-_id -__v').populate('provider', '-_id -__v');
            res.status(200).json(products);
        }
        catch(err){
            res.status(400).json({msj: err.message});
        }
    }

const createProduct = async (req,res) => {
    let company_id = await Provider.findOne({company_name: req.body.provider}, '_id').exec();
    const newProduct = req.body; // {title, , price, description, provider: company_name}
    newProduct.provider = company_id;

    try{
        let response = await new Product(newProduct);
        let answer = await response.save();
        res.status(201).json({
            msj: `Producto ${answer.title} guardado en el sistema.`,
            "product": answer
        });
    }catch(err){
        console.log("Este es el error que devuelve la api", err.message);
        res.status(400).json({
            msj: err.message
        });

    }
}

const deleteProduct = async (req,res)=>{
    const msj ="Has enviado un DELETE para borrar product";
    console.log(msj);
    res.json({"message":msj});
}

module.exports = {
    getProducts,
    createProduct,
    deleteProduct
    //editProduct,
}


