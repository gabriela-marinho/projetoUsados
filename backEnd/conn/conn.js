const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/carros',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }). then(() => {
        console.log('Conectado com o banco')
    }).catch(err => console.log('erro na conexão',err));
}    

module.exports = Conn;