const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    usuario: {type: String, require:true},
    senha: {type: String, require:true},
    email: {type: String, require:true}
})

const Usuario = mongoose.model('usuario',usuarioSchema);

module.exports = usuarioSchema;