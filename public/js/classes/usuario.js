export default class Usuario { 
    constructor(email, pass, nombres, apellidos){
        this.email = email; 
        this. pass = pass;
        this.nombres = nombres;
        this.apellidos = apellidos;        
    }

    link = 'http://localhost:3000/api/usuario'
    
    login = async (recordar) => {        
        let req = await fetch(`${this.link}/login`, 
        {
            method: 'POST',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": this.email,
                "pass": this.pass,
                "recordar": recordar
            })
        })
        return await req.json();    
    }     
    
    signup = async () => {        
        let req = await fetch(`${this.link}/signup`, 
        {
            method: 'POST',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": this.email,
                "pass": this.pass,
                "nombres": this.nombres,
                "apellidos": this.apellidos
            })
        })
        return await req.json();    
    }  
}