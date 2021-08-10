const jwt = require('jsonwebtoken');
//Token en header Auth antes de entrar a un ejs
const headerUsuario = (req, res, next) => {
    let token = req.cookies.token;
    req.headers.authorization = `Bearer ${token}`;
    next();
}
//Comprueba que el token funcione
const loggeado = (req, res, next) => {
    if(req.cookies.token != undefined)
        res.redirect('/index')
    else         
        next();
}

const checarToken = (req, res, next) => {    
    if (req.headers.authorization != undefined) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const verified = jwt.verify(token, process.env.SECRET_KEY);                    
            if (verified) 
                next();                
            else 
                throw new Error ('Token no valido')  
        } catch (error) {
            console.log(error);
            res.status(400).json({error: 'No tienes autorización para ver esto :/'})
        }              
    }
    else
        res.status(400).json({error:'No tienes autorización para ver esto :/'});    
}

const decodificarToken = (token) => {
    const decodificado = jwt.verify(token, process.env.SECRET_KEY);
    if(decodificado)
        return decodificado
    else
        throw new Error('Token no valido') 
} 

module.exports = {
    headerUsuario,
    checarToken,
    loggeado,
    decodificarToken
}