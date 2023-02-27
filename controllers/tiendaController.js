const Franelas = require('../models/Franelas') // Agregar Modelo
const Contacto = require('../models/Contacto') // Agregar Modelo

const traerFranelas = async(req, res) => {
   try {
      const franelas = await Franelas.find().lean();
      // console.log(franelas);
      res.render('tienda', {franelas});
   } catch (error) {
      console.log(error);
      res.send('Fallo algo...');
   }
}

const verFranela = async(req, res) => {
   const {id} = req.params;
   try {
      const franela = await Franelas.findById(id).lean();
      // console.log(franela);
      res.render('producto', {franela});
   } catch (error) {
      console.log(error);
      res.send('Fallo algo...');
   }
}

const crearContacto = async(req, res) => {
   const { nombre, apellido, email, mensaje } = req.body;
   try {
      const contacto = new Contacto({nombre, apellido, email, mensaje});
      await contacto.save();
      // console.log(contacto);
      res.redirect('/');
   } catch (error) {
      console.log(error);
      res.send('Fallo algo...');
   }
}

module.exports = {
   traerFranelas,
   verFranela,
   crearContacto
}