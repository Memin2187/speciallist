const { Schema, model } = require('mongoose');

const EspecialistaSchema = Schema ({
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    titulo: {
        type: Schema.Types.ObjectId,
        ref: 'Titulo',
        required: true
    },
    especialidad: {
        type: Schema.Types.ObjectId,
        ref: 'Especialidad',
        required: true
    },
    cedula: {
        type: Number
    }
});


module.exports = model( 'Especialista', EspecialistaSchema );
