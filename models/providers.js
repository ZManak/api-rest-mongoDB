const mongoose = require('mongoose');
const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true 
    },
    CIF: { 
        type: Number, 
        required: true,
        unique: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
    }
};

const providerSchema = mongoose.Schema(objectSchema);
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

/* Modelo de provider

const pro = new Provider({
    company_name: "Barrofur",
    CIF: 5075328,
    address: "C/ de la Izquierda, s/n",
    url_web: "www.barrofur.net"
});
 */