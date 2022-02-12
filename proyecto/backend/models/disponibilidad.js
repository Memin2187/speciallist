const { Schema, model } = require('mongoose');

const DisponibilidadSchema = Schema ({
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
    disponibilidad: {
        type: [Date],
    },    
});

module.exports = model( 'Disponibilidad', DisponibilidadSchema );

