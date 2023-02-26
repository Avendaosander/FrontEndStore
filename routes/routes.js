const express = require('express');
const traerFranelas = require('../controllers/tiendaController');
const router = express.Router()

router.get('/', traerFranelas)

router.get('/nosotros', (req, res) => {
   res.render('nosotros');
})

router.get('/contacto', (req, res) => {
   res.render('contacto');
})

router.get('/producto', (req, res) => {
   const franela = {
      src: '/img/1.jpg', 
      nombre: 'VueJS', 
      price: '$25', 
      descripcion: 'VueJS es uno de los mejores Frameworks de la actualidad para desarrollo ForntEnd'
   }
   res.render('producto', {franela});
})

module.exports = router