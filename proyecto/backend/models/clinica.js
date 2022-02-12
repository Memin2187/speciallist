const { Schema, model } = require('mongoose');

const ClinicaSchema = Schema ({
    idEspecialista: {
        type: String,
        required: [true, 'El especialista es obligatorio']
    },
    clinica: {
        type: String,
        require: [true, 'La clinica es obligatoria']
    }
});

module.exports = model( 'Clinica', ClinicaSchema );