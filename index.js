const express = require('express');
const app = express();
const logger = require('morgan');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const baseAPI = '/api/v1';
const cors = require('cors');
const reservaService = require('./js/reserva-service');
const { Db } = require('mongodb');

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));



let reservas = [
    {
        "idReserva": "ABCD",
        "nombre": "Marta Revuelta",
        "sala": "Grande",
        "horas": 2
    },
    {
        "idReserva": "JPMI",
        "nombre": "Jaime Prado",
        "sala": "Mediana",
        "horas": 1
    }
];

const server = http.createServer(app);
server.listen(PORT, function () {
    console.log('Server up and running on localhost:' + PORT);
});

reservaService.connectDb(function (err) {
    if (err) {
        console.log('Could not connect with MongoDB – moviesService');
        process.exit(1);
    }

    server.listen(PORT, function () {
        console.log('Server up and running on localhost:' + PORT);
    });
});


app.get('/reserva/:id', function (req, res) {
    let id = req.params.id;
    if(reservas.filter(r => r.idReserva === id).length > 0){
        res.status(200).send(reservas.filter(r => r.idReserva === id));
    }
    else{
        res.status(404).send("Registro no encontrado");
    }
});

app.post('/reserva', function (req, res) {
    reservaService.add(reserva, (err, reserva) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (reserva.length != 0){
            res.send({
                msg: 'Film created!'
            });
        }
    }
);
});