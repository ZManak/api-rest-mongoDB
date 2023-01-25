const Provider = require('../models/providers');

const getProviders = async (req,res) => {
    try {
        let providers = await Provider.find({},'-_id -__v')
            res.status(200).json(providers);
        }
    catch(err){
            res.status(400).json({msj: err.message});
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
    getProviders,
    createProvider,
    //deleteProduct
    //editProduct,
    
}