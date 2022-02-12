const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema ({
    nombres: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellidos: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    correo_verificado: {
        type: Boolean,
        default: false
    },
    curp: {
        type: String
    },
    rfc: {
        type: String
    },
    estadoCivil: {
        type: String
    },
    estado: {
        type: String
    },
    municipio: {
        type: String
    },
    colonia:{
        type: String
    },
    calle:{
        type: String
    },
    numero:{
        type: Number
    },
    password:{
        type: String
    },
    img:{
        type: String
    },
    // rol:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Categoria',
    //     required: true
    // },
    activo:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    },
    facebook:{
        type: Boolean,
        default: false
    },

});

UsuarioSchema.method.toJSON = function () {
    const { __v, _id, password, ...usuario } = this.toObject();

    usuario.uid = _id;

    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );