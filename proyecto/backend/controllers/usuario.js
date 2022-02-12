const { response, request } = require('express');
const Usuario = require("../models/usuario");


const usuarioPost = async (req, res=response) => {
    console.log("usuarioPost");
    console.log(req.body);
    try {
        const {
            nombres,apellidos,correo,curp,rfc,estadoCivil,estado,municipio,
            colonia,calle,numero,password,img,rol,activo,google,facebook,
        } = req.body;
    
        const usuario =  new Usuario( { nombres, apellidos, correo, password } );

        //Guardar en BD
        await usuario.save();
        return res.json({
            msg:"post api",
            usuario
        });
        
    } catch (error) {
        return res.status(500).json({
            msg: error
        });
    }
}

const usuariosGet = async (req=request, res=response) => {
    console.log("usuariosGet");
    

    try{
        const { limite = 5, desde = 0 } = req.query; 
        const query = { estado:true };


        const [ usuarios, total ] = await Promise.all([
            Usuario.find().skip(desde).limit( Number(limite) ),
            Usuario.find().countDocuments()
        ]);
        
        return res.json({
            total,
            usuarios
        });

    } catch (error) {
        return res.json({
            msg: error
        });
    }
}

const usuarioPut = async (req, res) => {
    console.log("usuarioPut");
    

    const { _id, password, google, correo, ...resto } = req.body;

    console.log(_id);


    const usuario = await Usuario.findByIdAndUpdate( _id, resto );

    res.status(201).json({
        msg:"put api",
        usuario
    });
}

const usuarioDelete = async (req=request, res=response) => {
    console.log("usuarioDelete");
    
    const { id } = req.body;
    console.log(id);

    // const uid = req.uid;
    //const usuario = await Usuario.findOneAndDelete( id );
    const usuario = await Usuario.findByIdAndUpdate(id, {activo:false}, {new:true});


    return res.json({
        msg:"delete api",
        usuario,
        // uid
        //usuarioAutenticado
    });
} 

const tarjetaPost = async(req, res) => {}
const tarjetaGet = async(req, res) => {}
const tarjetaPut = async(req, res) => {}
const tarjetaDelete = async(req, res) => {}

const comentarioPost = async(req, res) => {}
const comentarioGet = async(req, res) => {}
const comentarioPut = async(req, res) => {}
const comentarioDelete = async(req, res) => {}

const calificacionPost = async(req, res) => {}
const calificacionGet = async(req, res) => {}
const calificacionPut = async(req, res) => {}
const calificacionDelete = async(req, res) => {}

const rolePost = async(req, res) => {}
const roleGet = async(req, res) => {}
const rolePut = async(req, res) => {}
const roleDelete = async(req, res) => {}


module.exports= {
    usuarioPost,
    usuariosGet,
    usuarioPut,
    usuarioDelete
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
