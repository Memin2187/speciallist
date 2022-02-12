const { request, response } = require("express");
const AsuntoCita = require("../models/asuntoCita");
const Cita = require("../models/cita");


const citaPost = async( req, res) => {
    try {
        console.log("citaPost");

        const {
            idEspecialista,
            idUsuario,
            idAsunto,
            horario,
            fecha
        } = req.body;

        const citaDB = new Cita({
            idEspecialista,
            idUsuario,
            idAsunto,
            horario,
            fecha
        });

        await citaDB.save();


        return res.json({
            msg:"Post api",
            citaDB
        });
    } catch (error) {
        msg:error
    }
}
const citaGet = async( req, res) => {
    try {
        console.log("citaGet");

        const { limite = 5, desde = 0 } = req.query;
        const query = { estado : true};

        const [ citas , total ] = await Promise.all([
            Cita.find().skip(desde).limit( Number(limite) ),
            Cita.find().countDocuments()
        ]);

        return res.json({
            msg:"Get api",
            total,
            citas
        });
    } catch (error) {
        msg:error
    }
}
const citaPut = async( req, res) => {
    try {
        console.log("citaPut");

        const {
            id,
            idEspecialista,
            idUsuario,
            idAsunto,
            horario,
            fecha
        } = req.body;

        const citaDB =  Cita.findByIdAndUpdate(id,{
            idEspecialista,
            idUsuario,
            idAsunto,
            horario,
            fecha
        });

        return res.json({
            msg:"Put api",
            citaDB
        });
    } catch (error) {
        msg:error
    }
}
const citaDelete = async( req, res) => {
    try {
        console.log("citaDelete");

        const { id } = req.body;

        const citaDB = await Cita.findByIdAndDelete( id );

        return res.json({
            msg:"Delete api",
            citaDB
        });
    } catch (error) {
        msg:error
    }
}

const asuntoCitaPost = async( req, res) => {
    try {
        console.log("asuntoCitaPost");

        const { idEspecialista, idClinica, asunto } = req.body;

        const asuntoCitaDB = new AsuntoCita({ idEspecialista, idClinica, asunto });

        await asuntoCitaDB.save();

        return res.json({
            msg:"Post api",
            asuntoCitaDB
        });
    } catch (error) {
        msg:error
    }
}
const asuntoCitaGet = async( req, res) => {
    try {
        console.log("asuntoCitaGet");

        const { limite = 5, desde = 0 } = req.query;
        const query = { estado : true};

        const [ asuntoCitas , total ] = await Promise.all([
            AsuntoCita.find().skip(desde).limit( Number(limite) ),
            AsuntoCita.find().countDocuments()
        ]);

        return res.json({
            msg:"Get api",
            total,
            asuntoCitas
        });
    } catch (error) {
        msg:error
    }
}
const asuntoCitaPut = async( req, res) => {
    try {
        console.log("asuntoCitaPut");

        const { id, idEspecialista, idClinica, asunto } = req.body;

        const asuntoCitaDB = await AsuntoCita.findByIdAndUpdate(id, { idEspecialista, idClinica, asunto });

        return res.json({
            msg:"Put api",
            asuntoCitaDB
        });
    } catch (error) {
        msg:error
    }
}
const asuntoCitaDelete = async( req, res) => {
    try {
        console.log("asuntoCitaDelete");

        const { id } = req.body;

        const asuntoCitaDB = await AsuntoCita.findByIdAndDelete( id );

        return res.json({
            msg:"Delete api",
            asuntoCitaDB
        });
    } catch (error) {
        msg:error
    }
}

const servicioPost = async( req, res) => {}
const servicioGet = async( req, res) => {}
const servicioPut = async( req, res) => {}
const servicioDelete = async( req, res) => {}


module.exports = {
    citaPost,
    citaGet,
    citaPut,
    citaDelete,
    asuntoCitaPost,     
    asuntoCitaGet,
    asuntoCitaPut,
    asuntoCitaDelete,
}