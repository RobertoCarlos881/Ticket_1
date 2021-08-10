const rateLimit = require('express-rate-limit'); 

let corsOptions = {
  origin: function (origin, callback) {
    if (process.env.WHITELIST.indexOf(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Acceso denegado'))
    }
  }
}

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // limitar el tiempo de acceso a 5 minutos
    max: 1000, //Limite desde la IP de la cantidad de veces que quiero que accedea a mi API
    message: {
        error: 'Máximo de peticiones permitidas al sistema, intente más tarde'
    }
});

module.exports = {corsOptions, limiter}