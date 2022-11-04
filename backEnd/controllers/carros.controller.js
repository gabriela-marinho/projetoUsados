const mongoose = require('mongoose');
const CarroService = require('./../services/carros.service');
const carroService =  new CarroService;


class CarrosController{

    getCarros = async (req, res) => {
    const carro = await carroService.findAll();
    res.send(carro);
  }

    getCarrosById = async (req, res) => {
      const id = req.params.id;
      const carro = await carroService.findById(id);
      res.send(carro);
  }

    createCarros = async (req, res) => {
    const carro = req.body;
    await carroService.create(carro)
    .then(() => {
      res.send({message: `Veículo ${carro.nome} cadastrado com sucesso!`})
    })
    .catch((err) => {
      res.status(500).send({message: `Erro no servidor: ${err}`})
    })
  }

  editCarros = async (req, res) => {
    const id = req.params.id;
    const carroEdit = req.body;
    await carroService.edit(id, carroEdit)
    .then(() => {
      res.send({message: `Veículo: ${carroEdit.nome} com ID: ${id} atualizado com sucesso!`})
    })
    .catch((err) => {
      res.status(500).send({message: `Erro no servidor: ${err}`})
    }) 
  }

  deleteCarro = async(req, res) => {
    const id = req.params.id;
    await carroService.delete(id)
    .then(() => {
      res.send({message: `Veículo com ID: ${id} excluído com sucesso!`})
    })
    .catch((err) => {
      res.status(500).send({message: `Erro no servidor: ${err}`})
    }) 
  }
}
module.exports = CarrosController;