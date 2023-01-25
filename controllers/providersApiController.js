// Controlador - Lógica de negocio de la app
const Provider = require('../models/providers');

const getProviders = async (req,res) => {
    if (req.params.id) { // con ID
        try {
            let product = await Product.find({id:req.params.id},'-_id -__v');
            if (product.length > 0) {
                res.status(200).json(product[0]); // Respuesta de la API para 1 producto
            }
            else {
                res.status(404).json({msj:"producto no encontrado con ID "+req.params.id}); // Respuesta de la API para 1 producto
            }    
        }
        catch(err){
            res.status(400).json({msj: err.message});
        }
    } else { // sin ID --> TODOS los products
        try {
            // let products = await Product.find({}, {"_id" : 0,"__v":0}); // []
            let products = await Product.find({},'-_id -__v');
            res.status(200).json(products); // Respuesta de la API para muchos productos
        }
        catch(err){
            res.status(400).json({msj: err.message});
        }
    }
}

const createProvider = async (req,res) => {
    const newProvider = req.body; 

    try{
        
        let response = await new Provider (newProvider);
        let answer = await response.save(); 
        console.log("Este es el console.log de lo que devuelve la api", answer);

        res.status(201).json({
            msj: `Provider ${answer.company_name} guardado en el sistema.`,
            provider: answer
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
    //getProducts,
    createProvider,
    //deleteProduct
    //editProduct,
    
}