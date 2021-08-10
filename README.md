# Ticket_1


<h3 align="center">Ticket 1</h3>

  <p align="center">
    Una pagina donde puedes hacer tus presupuestos mas facilmente
    <br />
    <a href="https://github.com/Roberto881/Ticket_1"><strong>Explora los documentos »</strong></a>
    <br />
    <br />
    ·
    <a href="https://teclatienda3.atlassian.net/jira/software/projects/T1/boards/3">Mi Jira</a>
  </p>
  <p>Autor:
    <br/>
    <a href="https://github.com/Roberto881">Github Roberto Carlos</a>
  </p>



<details open="open">
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del proyecto</a>
      <ul>
        <li><a href="#construido-con">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#comenzar">Comenzar</a>
      <ul>
        <li><a href="#prerequisitos">Prerequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#licencia">Licencias</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>


## Acerca Del Proyecto
Este proyecto es para el aprendizaje de backend en el bootcamp de Tecla.


### Construido Con

Algunas de las tecnologias usadas
* [Bootstrap](https://getbootstrap.com)
* [NodeJS](https://nodejs.org)
* [Express](https://expressjs.com/)


## Comenzar

Es muy facil montar este proyecto localmente, solo hay que seguir unos pequeños pasos.

### Prequisitos

* Tener instalado node v12.20.1 o posterior


### Instalación

1. Clona el repositorio
   ```sh
   git clone https://github.com/Roberto881/Ticket_1.git
   ```
2. Instala los paquetes de NPM
   ```sh
   npm install o npm i
   ```
3. Crea tu archivo de variables de entorno `.env`
   ```JS
    HOST='localhost'
    PORT= 3000
    WHITELIST=[]
    DB_HOST= 'localhost'
    DB_PORT= 
    DB_USER= ''
    DB_PASS= ''
    DB_NAME= 'ticket_1'
    SECRET_KEY= <Secretkey> poner aqui algo con lo que se cifre tu key
   ```

## Uso
1. Antes de iniciar el servidor ve al archivo app.js que se encuentra en el menu en la linea 60 y 61 hay 2 lineas comentadas, descomentada cualquiera de las 2 para poder crear la base de datos, en sql server debe de haber 
una base de datos llamada ticket_1 para poderse vincular.

2. Enciende el servidor de node con:
```sh
nodemon server.js o con npm run dev
   ```
3. Ingresa en el puerto que te marque la consola y comienza a navegar entre las vistas.

4. A la hora de apagar el server vuelve a comentar las lineas del punto 1 para que no se vuelva a crear la database y se sobreescriba.



   
## Licencia

Distributed under the MIT License. See `LICENSE` for more information.


## Contacto

Roberto Carlos - [GitHub](https://github.com/Roberto881) - roberto881carlos881@hotmail.com

Project Link: [https://github.com/Roberto881/TeclaFFinal](https://github.com/Roberto881/TeclaFFinal)
