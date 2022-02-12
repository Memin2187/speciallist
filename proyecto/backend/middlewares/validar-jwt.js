const { response, request } = require('express');
const {jwt, verify} = require('jsonwebtoken');
const Usuario = require('../models/usuario');


const validarJWT = async ( req=request, res= response, next) => 
{
    const token = req.header("x-token");

    console.log(token);

    if( !token ) {
        return res.status(401).json({
            msg:"no hay token en la peticion"
        });
    }

    try {
        // const payload = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        // console.log(payload);
        
        const { uid } = verify( token, process.env.SECRETORPRIVATEKEY );

        // 
        const usuario = await Usuario.findById(uid);

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no valido - no existe en BD'
            });
        }

        // verificar baja logica del usuario
        if( !usuario.estado ){
            return res.status(401).json({
                msg: 'Token no valido - usuario baja logica'
            });
        }


        req.usuario = usuario;
        // console.log( uid );
        // req.uid = uid;


        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
}

module.exports = {
    validarJWT
}