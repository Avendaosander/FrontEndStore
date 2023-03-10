# FrontEnd Store

Login
Register
Tienda
Producto
Nosotros
Contactanos

Stack MongoDB NodeJS ExpressJS

### Instalación 🔧

Copiar repositorio
```
git clone https://github.com/Avendaosander/FrontEndStore.git
```
Instalar las dependecias

```
Ejecutar el comando 'npm i'
```
Agregar el archivo .env al proyecto
```
Crear el archivo . env en la raiz del proyecto './'
```
```
PORT = 3000
URI = (Acá colocas la base de datos) 
SESSIONSECRET = KeySecret

```
Iniciar el servidor
```
Ejecutar el comando  'npm run start'
```

Server is listen on port:  4001
DB Conectada mongodb://localhost:27017/**name_of_database**

## Ejecutando las pruebas ⚙️


**Register.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API. 
El modelo tiene una validacion que no permite guardar correos que ya esten registrados, ni contraseñas menores a 8 caracteres. ruta:  http://localhost:4001/register (POST)

```
Para Probar el Register. Ingresando el siguiente ejemplo en formato json (POST)
{
  "nombre": "Pedro",
  "email": "correodeprueba@gmail.com",
  "password": "1234567890",
  "repeatPassword": "1234567890"
}

```
**Login.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:4001/login (POST)

```
Para Probar el Login. Ingresando el siguiente ejemplo en formato json
{
    "email":"correodeprueba@gmail.com",
    "password": "123456789"
}

```
**Logout.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API (POST)
```
http://localhost:4001/logout (GET)
```
**Tienda.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API  

```
Para ir a la ruta principal, esto mostrará todos los productos disponibles.
http://localhost:4001/ (GET)
```

**Producto.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API  

```
Meustra el producto seleccionado. Ingresando el siguiente ejemplo
http://localhost:4001/producto/:id (GET)
```
**Nosotros.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API  

```
Muestra un resumen sobre la tienda. Ingresando el siguiente ejemplo
http://localhost:4001/nosotros (GET)
```
**Contacto.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:4001/contacto (POST)

```
Para ponerse en contacto con el administrador del comercio. Ingresando el siguiente ejemplo en formato JSON
{
  "nombre": "Pedro",
  "apellido": "Perez",
  "email": "correodeprueba@gmail.com",
  "mensaje": "Mi primer mensaje de contacto desde formulario"
}
```


## Construido con 🛠️

Nodejs 18.12.0
Express 4.18.2
MongoDB 6.0.4
Mongoose 6.10.0
Express-handlebars 6.0.7
Express-validator 6.15.0
Express-session 1.17.3
passport 0.6.0
Connect-flash 0.1.1
Bcryptjs 2.4.3
Dotenv 16.0.3

* [NodeJs](https://nodejs.org/en/docs/) 
* [Express](https://expressjs.com/en/5x/api.html) 
* [MongoDB](https://www.mongodb.com/docs/) 
* [Mongoose](https://mongoosejs.com/docs/) 




## Autor ✒️

* **Alexander Avendaño** - *Desarrollador* - [Avendaosander](https://github.com/Avendaosander)