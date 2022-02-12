const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { dbConection } = require('./database/config');

class Server {

    constructor() {
        // Express configuración
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth',
            usuario : '/api/usuario',
            especialista: '/api/especialista',
            horario: '/api/horario',
            cita: '/api/cita'
        }

        // Conectar a base datos
        this.conectarDB();

        // Midlewares
        this.middlewares();
        

        // Rutas de aplicacion
        this.routes();
        
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public') );

        // Carga de Archivos
        this.app.use( fileUpload({ useTempFiles: true, tempFileDir:'/tmp/'}));

    }

    async conectarDB() {
        await dbConection();
    }

    routes() {
        this.app.use( this.paths.auth, require('./routes/auth'));
        this.app.use( this.paths.usuario, require('./routes/usuario'));
        this.app.use( this.paths.especialista, require('./routes/especialista'));
        this.app.use( this.paths.horario, require('./routes/horario'));
        this.app.use( this.paths.cita, require('./routes/cita'));
    }

    listen() {
        this.app.listen( this.port ,()=>{
            console.log("PUERTO", this.port);
            console.log("PUERTO", this.paths);
        } );
    }
}

module.exports = Server;