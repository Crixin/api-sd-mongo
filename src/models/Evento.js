const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const EventoSchema = new mongoose.Schema({
    origem: {type: String},
    destino: {type: String},
    valor: {type: String},
    traidor: {type: String},
}, {
    timestamps: true,
});
autoIncrement.initialize(mongoose.connection);
EventoSchema.plugin(autoIncrement.plugin, 'Counter');
module.exports = mongoose.model('Evento', EventoSchema)
