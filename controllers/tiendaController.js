const Franelas = require('../models/Franelas') // Agregar Modelo

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

module.exports = traerFranelas;