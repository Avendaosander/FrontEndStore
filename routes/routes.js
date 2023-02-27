const express = require('express');
const { crearUser, loginUser } = require('../controllers/authController');
const { traerFranelas, verFranela, crearContacto } = require('../controllers/tiendaController');
const router = express.Router()

router.get('/', traerFranelas)

router.get('/login', (req, res) =>{
   res.render('login');
});

router.post('/login', loginUser);

router.get('/register', (req, res) =>{
   res.render('register');
});

router.post('/register', crearUser);

router.get('/nosotros', (req, res) => {
   res.render('nosotros');
})

router.get('/contacto', (req, res) => {
   res.render('contacto');
})

router.get('/producto/:id', verFranela)

router.post('/contacto', crearContacto)

module.exports = router