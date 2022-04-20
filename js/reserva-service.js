'use strict';

const MongoClient = require('mongodb').MongoClient;
let db;
let ObjectId = require('mongodb').ObjectID;
const Reservas = function () {
};

Reservas.prototype.connectDb = function (callback) {
    MongoClient.connect("mongodb+srv://root:root@iniciales-pnet-curso.ew7ns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true},
        function (err, database) {
            if (err) {
                callback(err);
            }

			db = database.db('pdp-pnet-2020-2021').collection('reservas');

            callback(err, database);
        });
};

Reservas.prototype.add = function (reserva, callback) {
    return db.insertOne(reserva, callback);
};

Reservas.prototype.get = function (_id, callback) {
    return db.find({_id: ObjectId(_id)}).toArray(callback);
};

Reservas.prototype.getAll = function (callback) {
    return db.find({}).toArray(callback);
};

Reservas.prototype.update = function (_id, updatedreserva, callback) {
    delete updatedreserva._id;
    return db.updateOne({_id: ObjectId(_id)}, {$set: updatedreserva}, callback);};

Reservas.prototype.remove = function (_id, callback) {
    return db.deleteOne({_id: ObjectId(_id)}, callback);
};

Reservas.prototype.removeAll = function (callback) {
    return db.deleteMany({}, callback);
};

module.exports = new Reservas();


