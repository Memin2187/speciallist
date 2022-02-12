const { response, request } = require('express');
const { json } = require('express/lib/response');
const Titulo = require('../models/titulo');
const Especialidad = require('../models/especialidad');
const Especialista = require('../models/especialista');
const Clinica = require('../models/clinica');

/**
especialistasPost
especialistasGet
especialistasPut
especialistasDelete

titulosPost
titulosGet
titulosPut
titulosDelete

especialidadesPost
especialidadesGet
especialidadesPut
especialidadesDelete

clinicaPost
clinicaGet
clinicaPut
clinicaDelete
*/

const especialistaPost = async( req, res )=>{
    console.log("especialistasPost");
    try {
        const {idUsuario, titulo, especialidad, cedula} = req.body;

        const especialistaDB = new Especialista({idUsuario, titulo, especialidad, cedula});

        especialistaDB.save();

        return res.json({
            especialistaDB
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const especialistasGet = async( req, res )=>{
    console.log("especialistasGet");
    try {
        const { limite = 5, desde = 0 } = req.query;
        const query = { estado : true};

        const [ especialistas, total ] = await Promise.all([
            Especialista.find().skip(desde).limit( Number(limite) )
            .populate('idUsuario',"nombres apellidos")
            .populate('titulo', 'titulo')
            .populate('especialidad', 'especialidad'),
            Especialista.find().countDocuments()
        ]);

        return res.json({
            total,
            especialistas
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const especialistaPut = async( req, res )=>{
    console.log("especialistasPut");
    try {
        const { id, titulo, especialidad, cedula } = req.body;
        const especialistaDB = await Especialista.findByIdAndUpdate( id, {titulo, especialidad, cedula}, {new:true} );
 
        return res.json({
            msg:"put api",
            especialistaDB
        });
    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const especialistaDelete = async( req, res )=>{
    console.log("especialistasDelete");
    try {
        const { id } = req.body;

        const especialistaDB = await Especialista.findByIdAndDelete(id);

        return res.json({
            msg:"delete api",
            especialistaDB
        });
    } catch (error) {
        return res.json({
            msg:error
        });
    }
}

const tituloPost = async( req, res )=>{
    console.log("tituloPost");
    
    try {
        const {titulo} = req.body;
    
        const titulodb =  new Titulo( { titulo } );

        console.log(titulodb);
        //Guardar en BD
        await titulodb.save();


        return res.json({
            msg:"post api",
            titulodb
        });
        
    } catch (error) {
        return res.json({
            msg: error
        });
    }

}
const titulosGet = async( req, res=response )=>{
    console.log("titulosGet");

    try {
        const { limite = 5, desde = 0 } = req.query;
        const query = { estado : true};

        const [ titulos, total ] = await Promise.all([
            Titulo.find().skip(desde).limit( Number(limite) ),
            Titulo.find().countDocuments()
        ]);

        return res.json({
            total,
            titulos
        });
        
    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const tituloPut = async( req, res )=>{
    console.log("titulosPut");
    try {
        const { id, titulo } = req.body;
        const titulodb = await Titulo.findByIdAndUpdate( id, {titulo}, {new:true} );
 
        return res.json({
            msg:"put api",
            titulodb
        });
 
    } catch (error) {
 
        return res.json({
            msg:error
        });
 
    }
}
const tituloDelete = async( req, res )=>{
    console.log("titulosDelete");
    try {
        const { id } = req.body;

        const titulodb = await Titulo.findByIdAndDelete(id);

        return res.json({
            msg:"delete api",
            titulodb
        });

    } catch (error) {
        return res.json({
            msg:error
        })
    }
}

const especialidadPost = async( req, res )=>{
    console.log("especialidadPost");

    try {
        const {especialidad} = req.body;

        const especialidadDB = new Especialidad({especialidad});

        await especialidadDB.save();

        return res.json({
            msg:"post api",
            especialidadDB
        });
    } catch (error) {
        return res.json({
            msg
        });
    }
}
const especialidadesGet = async( req, res )=>{
    console.log("especialidadesGet");

    try {
        const { limite = 5, desde = 0 } = req.query;
        const query = { estado : true};

        const [ especialidades, total ] = await Promise.all([
            Especialidad.find().skip(desde).limit( Number(limite) ),
            Especialidad.find().countDocuments()
        ]);

        return res.json({
            total,
            especialidades
        });

    } catch (error) {
        return res.json({
            msg
        });
    }
}
const especialidadPut = async( req, res )=>{
    console.log("especialidadesPut");

    try {
        const {id, especialidad} = req.body;

        const especialidadDB = await Especialidad.findByIdAndUpdate(id, {especialidad}, {new:true});

        return res.json({
            msg:"put api",
            especialidadDB
        });
    } catch (error) {
        return res.json({
            msg
        });
    }
}
const especialidadDelete = async( req, res )=>{
    console.log("especialidadesDelete");

    try {
        const {id} = req.body;

        const especialidadDB = await Especialidad.findByIdAndDelete(id);

        return res.json({
            msg:"delete api",
            especialidadDB
        });
    } catch (error) {
        return res.json({
            msg
        });
    }
}

const clinicaPost = async( req, res)=>{
    console.log("clinicaPost");
    try {
        const {idEspecialista, clinica} = req.body;
    
        const clinicaDB =  new Clinica( { idEspecialista, clinica } );

        console.log(clinicaDB);
        //Guardar en BD
        await clinicaDB.save();

        return res.json({
            msg:"Post api",
            clinicaDB
        });
    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const clinicasGet = async( req, res)=>{
    console.log("clinicaGet");
    try {
        
        const { limite = 5, desde = 0 } = req.query;
        const query = { estado : true};

        const [ clinicas, total ] = await Promise.all([
            Clinica.find().skip(desde).limit( Number(limite) ),
            Clinica.find().countDocuments()
        ]);

        return res.json({
            msg:"Get api",
            total,
            clinicas
        });
    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const clinicaPut = async( req, res)=>{
    console.log("clinicaPut");
    try {
        
        const { id, clinica } = req.body;
        const clinicaDB = await Clinica.findByIdAndUpdate( id, {clinica}, {new:true} );
 
        return res.json({
            msg:"Put api",
            clinicaDB
        });
        
    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const clinicaDelete = async( req, res)=>{
    console.log("clinicaDelete");
    try {

        const {id} = req.body;

        const clinicaDB = await Clinica.findByIdAndDelete(id);
        
        return res.json({
            msg:"Delete api",
            clinicaDB
        });
    } catch (error) {
        return res.json({
            msg:error
        });
    }
}

module.exports = {
    tituloPost, titulosGet, tituloPut, tituloDelete,
    especialidadPost, especialidadesGet, especialidadPut, especialidadDelete,
    especialistaPost, especialistasGet, especialistaPut, especialistaDelete,
    clinicaPost, clinicasGet, clinicaPut, clinicaDelete,
};