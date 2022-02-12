const { response } = require("express");
const Usuario = require("../models/usuario");

const login =  async (req, res = response) => {

    console.log("login");

    const { correo, password} = req.body;

    try {

        console.log(correo, password);

        

        const usuario = await Usuario.findOne({correo,password});

        console.log(usuario);

        return res.json({
            exito:true,
            usuario
        });
        
    } catch (error) {
        return res.status(500).json({
            exito: false,
            msg: error
        });
    }
}


module.exports = {
    login
}