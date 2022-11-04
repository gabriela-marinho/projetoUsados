const express =  require('express');
const router = express.Router();
const CarrosController = require('./../controllers/carros.controller')
const carrosController = new CarrosController;
const Service = require('../services/carros.service');

router.get('/', carrosController.getCarros); 

router.get('/find/:id', carrosController.getCarrosById);

router.post('/add', carrosController.createCarros);

router.put('/:id',carrosController.editCarros);

router.delete('/:id',carrosController.deleteCarro);

// router.get('/:id', (req, res) => {

//     const id = req.params.id

//     const result = service.getById(id)
//     if(result !== undefined){
//         res.status(200).json(result)
//         return
//     }
    
//     res.sendStatus(204)
    
// })

// router.post('/', (req, res) => {
//     const contact = req.body

//     service.create(contact)

//     res.status(201).json(contact)
// })

// router.put("/:id", (req, res) => {

//     const id = req.params.id
//     const body = req.body

//     const result = service.put(id, body)

//     res.status(200).json(result)
// })

// router.delete("/:id", (req, res) => {

//     const id = req.params.id

//     service.remove(id)

//     res.sendStatus(204)
// })

module.exports = router;