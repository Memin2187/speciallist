const { Schema, model } = require('mongoose');

const AsuntoCitaSchema = Schema ({
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
    asunto: {
        type: String,
        required : [true, 'El asunto es requerido']
    },    
});

module.exports = model( 'AsuntoCita', AsuntoCitaSchema );