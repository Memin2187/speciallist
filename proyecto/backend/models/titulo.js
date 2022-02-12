const { Schema, model } = require('mongoose');

const TituloSchema = Schema ({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    }
});

module.exports = model( 'Titulo', TituloSchema );






