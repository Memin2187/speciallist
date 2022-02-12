const { response, request } = require('express');
const { model } = require('mongoose');

const Horario = require('../models/horario');
const Disponibilidad = require('../models/disponibilidad');

const horarioPost = async (req, res) => {
    try {
        console.log("horarioPost");
        console.log(req.body);
        const {
            idEspecialista,idClinica,lunes,
            martes,miercoles,jueves,viernes,
            sabado,domingo
        } = req.body;


        const horarioDB = new Horario({
            idEspecialista,idClinica,lunes,
            martes,miercoles,jueves,viernes,
            sabado,domingo
        }); 

        await horarioDB.save();

        return res.json({
            msg:"post api",
            horarioDB
        });
    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const horarioGet = async (req, res) => {
    try {
        console.log("horarioGet ");

        const { limite = 5, desde = 0 } = req.query;
        const query = { estado : true};

        const [ horarios, total ] = await Promise.all([
            Horario.find().skip(desde).limit( Number(limite) ),
            Horario.find().countDocuments()
        ]);

        return res.json({
            msg:"Get api",
            total,
            horarios
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const horarioPut = async (req, res) => {
    try {
        console.log("horarioPut ");
        console.log(req.body);
        const {
            id, 
            idEspecialista,idClinica,lunes,
            martes,miercoles,jueves,viernes,
            sabado,domingo
        } = req.body;


        const horario = {
            idEspecialista,idClinica,lunes,
            martes,miercoles,jueves,viernes,
            sabado,domingo
        }; 

        const horarioDB = await Horario.findByIdAndUpdate(id, horario);;

        return res.json({
            msg:"post api",
            horarioDB
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const horarioDelete = async (req, res) => {
    try {
        console.log("horarioDelete");

        const {id} = req.body;

        const horarioDB = await Horario.findByIdAndDelete(id);
        
        return res.json({
            msg:"Delete api",
            horarioDB
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}


const disponibilidadPost = async (req, res) => {
    try {
        console.log("disponibilidadPost");

        const {idEspecialista, idClinica, disponibilidad} = req.body;

        console.log(disponibilidad);

        const disponibilidadDB = new Disponibilidad({idEspecialista, idClinica, disponibilidad});

        console.log(disponibilidadDB);

        await disponibilidadDB.save();

        return res.json({
            msg:"post api",
            disponibilidadDB
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const disponibilidadGet = async (req, res) => {
    try {
        console.log("disponibilidadGet");

        const { limite = 5, desde = 0 } = req.query;
        const query = { estado : true};

        const [ disponibilidades , total ] = await Promise.all([
            Disponibilidad.find().skip(desde).limit( Number(limite) ),
            Disponibilidad.find().countDocuments()
        ]);

        return res.json({
            msg:"Get api",
            total,
            disponibilidades
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const disponibilidadPut = async (req, res) => {
    try {
        console.log("disponibilidadPut");

        const { id, idEspecialista, idClinica, disponibilidad} = req.body;

        const disponibilidadDB = await Disponibilidad.findByIdAndUpdate(id, {idEspecialista, idClinica, disponibilidad});

        return res.json({
            msg:"post api",
            disponibilidadDB
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}
const disponibilidadDelete = async (req, res) => {
    try {
        console.log("disponibilidadDelete");

        const {id} = req.body;

        const disponibilidadDB = await Disponibilidad.findByIdAndDelete(id);
        
        return res.json({
            msg:"Delete api",
            disponibilidadDB
        });

    } catch (error) {
        return res.json({
            msg:error
        });
    }
}

module.exports = {
    horarioPost,
    horarioGet, 
    horarioPut, 
    horarioDelete,
    disponibilidadPost,
    disponibilidadGet,
    disponibilidadPut,
    disponibilidadDelete,
}
