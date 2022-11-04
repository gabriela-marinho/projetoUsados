const express =  require('express');
const cors = require('cors');
const carrosRouter = require('./routes/carros.routes');
const Conn = require('./conn/conn');




const app = express();
app.use(express.json());
app.use(cors());

app.use('/',carrosRouter);

Conn();

const port = 2020;

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
})