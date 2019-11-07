const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    user_id: Integer,
    workspace_id: Integer,
    dt_hr_inicial: Timestamp,
    dt_hr_final: Timestamp,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Evento', EventoSchema)
