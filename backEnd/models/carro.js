const mongoose = require('mongoose');

const carroSchema = new mongoose.Schema({
    
    nome: {type: String, require:true},
    marca: {type: String, require:true},
    modelo: {type: String, require:true},
    foto: {type: String, require:true},
    dataCriacao: {type: Date, default: Date.now}
})

const Carro = mongoose.model('carros',carroSchema);

module.exports = Carro;

