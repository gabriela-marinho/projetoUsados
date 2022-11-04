const Carro = require('./../models/carro');

class CarroService{

   findAll = async () => {
      return await Carro.find();
   
   }

   findById =  async (id) => await Carro.findById(id);
    

   create = async (carro) => {
      return await Carro.create(carro);
    }

    edit = async(id, carro) => {
      return Carro.updateOne({_id: id}, carro)
    }

    delete = async(id) => {
      return await Carro.deleteOne({_id: id})
    }
}

module.exports = CarroService;