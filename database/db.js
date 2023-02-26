const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

mongoose.connect(process.env.URI) 
   .then(()=> console.log('DB Conectada'))
   .catch((e) => console.log("Fallo de Conexion " + e));