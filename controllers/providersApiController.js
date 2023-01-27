const Provider = require('../models/providers');

const getProviders = async (req, res) => {
    try {
        let providers = await Provider.find({}, '-_id -__v')
        res.status(200).json(providers);
    }
    catch (err) {
        res.status(400).json({ msj: err.message });
    }
}

const createProvider = async (req, res) => {
    const newProvider = req.body;
    try {
        let response = await new Provider(newProvider);
        let answer = await response.save();
        res.status(201).json({
            msj: `Provider ${answer.company_name} guardado en el sistema.`,
            provider: answer
        });
    } catch (err) {
        res.status(400).json({ msj: err.message });

    }
}

const deleteProvider = async (req, res) => {
    const deletedProvider = req.body.company_name
    try {
        let answer = await Provider.findOneAndDelete({ company_name: deletedProvider });
        res.status(200).json({
            msj: `Proveedor ${answer.company_name} eliminado del sistema.`,
            product: answer
        })
    }
    catch (err) {
        res.status(400).json({ msj: err.message });
    }
}

const updateProvider = async (req, res) => {
    const updatedProvider = req.body;
    try {
        let response = await Provider.findOneAndUpdate({ company_name: updatedProvider.company_name }, { company_name: updatedProvider.newName, CIF: updatedProvider.newCIF, address: updatedProvider.newAddress, url_web: updatedProvider.newUrl }, { returnDocument: 'after' });
        res.status(200).json({
            msj: `Proveedor actualizado.`,
            product: response
        })
    }
    catch (err) {
        res.status(400).json({ msj: err.message });
    }
}
module.exports = {
    getProviders,
    createProvider,
    deleteProvider,
    updateProvider
}