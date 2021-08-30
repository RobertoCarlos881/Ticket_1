require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const midd = require('./app/middleware/midd.general');
//Views
const templates = require('./views/general.view');
const usuarioView = require('./views/usuario.view');
const presupuestoView = require('./views/presupuesto.view');
//Sequelize
const sequelize = require('./app/db/connexiondb');
const Usuario = require('./app/db/usuario');
const Presupuesto = require('./app/db/presupuesto');
const FlujoDeEfectivo = require('./app/db/flujo.de.efectivo');
const Ingreso = require('./app/db/ingreso');
const IngresoValor = require('./app/db/ingreso.valor');
const CostoDirecto = require('./app/db/costo.directo');
const CostoDirectoValor = require('./app/db/costo.directo.valor');
const CostoAdministrativo = require('./app/db/costo.administrativo');
const CostoAdministrativoValor = require('./app/db/costo.administrativo.valor');
const Recurso = require('./app/db/recurso');
const RecursoPorcentaje = require('./app/db/recurso.porcentaje');
//Middlewares generales
app.use(express.json());
app.use(cors(midd.corsOptions));
app.use(midd.limiter);
app.use(cookieParser());
app.use((err, req, res, next) => { //Errores generales
    if (err) {
        console.log(err);
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + err.message)
        }
    }
    next();
});
//EJS
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');

const sincronizarTablas = async () => {
    await Usuario.sync({alter: true});
    await Presupuesto.sync({alter: true});  
    await FlujoDeEfectivo.sync({alter: true});
    await Ingreso.sync({alter: true}); 
    await IngresoValor.sync({alter: true}); 
    await CostoDirecto.sync({alter: true}); 
    await CostoDirectoValor.sync({alter: true}); 
    await CostoAdministrativo.sync({alter: true}); 
    await CostoAdministrativoValor.sync({alter: true}); 
    await Recurso.sync({alter: true}); 
    await RecursoPorcentaje.sync({alter: true});
}

const iniciarServidor = async () => {   
    try {           
        await sequelize.authenticate();
        //await sincronizarTablas();
        app.listen(process.env.PORT, () => {
            console.log(`Server on: http://${process.env.HOST}:${process.env.PORT}`);
        })
    }catch (err){
        console.log('---DB connection ERROR: ', err);
    }
}

app.use('/api', usuarioView);
app.use('/api', presupuestoView);
app.use(templates);

iniciarServidor();

 