const { Schema, model } = require('mongoose');

const HorarioSchema = Schema ({
    idEspecialista: {
        type: Schema.Types.ObjectId,
        ref: 'Especialista',
        required: true
    },
    idClinica: {
        type: Schema.Types.ObjectId,
        ref: 'Clinica',
        required: true
    },
    lunes: {
        type: [String],
    },
    martes: {
        type: [String],
    },
    miercoles: {
        type: [String],
    },
    jueves: {
        type: [String],
    },
    viernes: {
        type: [String],
    },
    sabado: {
        type: [String],
    },
    domingo: {
        type: [String],
    },
    
});

module.exports = model( 'Horario', HorarioSchema );

