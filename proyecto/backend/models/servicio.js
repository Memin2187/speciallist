const { Schema, model } = require('mongoose');

const ServicioSchema = Schema ({
    idEspecialista: {
        type: Schema.Types.ObjectId,
        ref: 'Especialista',
        required: true
    },
    servicio: {
        type: String,
        required : [true, 'El servicio es requerido']
    },    
    descripcion: {
        type: String,
        required : [true, 'La descripcion es requerida']
    },    
});

module.exports = model( 'Servicio', ServicioSchema );