const { Schema, model } = require('mongoose');

const EspecialidadSchema = Schema ({
    especialidad: {
        type: String,
        required: [true, 'La especialidad es obligatoria']
    },
});

module.exports = model( 'Especialidad', EspecialidadSchema );