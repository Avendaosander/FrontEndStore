const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
   const franelas = [
      {src: '/img/1.jpg', nombre: 'VueJS', price: '$25'},
      {src: '/img/2.jpg', nombre: 'AngularJS', price: '$25'},
      {src: '/img/3.jpg', nombre: 'ReactJS', price: '$30'},
      {src: '/img/4.jpg', nombre: 'Redux', price: '$20'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
      {src: '/img/5.jpg', nombre: 'NodeJS', price: '$30'},
   ]
   res.render('tienda', {franelas})
})

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