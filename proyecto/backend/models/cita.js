const { Schema, model } = require('mongoose');
const Clinica = require('./clinica');

const CitaSchema = Schema ({
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
    horario: {
        type: String,
        required : [true, 'El asunto es requerido']
    }, 
    fecha: {
        type: String,
        required : [true, 'El asunto es requerido']
    },   
});

module.exports = model( 'Cita', CitaSchema );