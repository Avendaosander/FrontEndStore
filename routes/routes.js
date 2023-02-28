const express = require('express');
const { body } = require('express-validator')
const { crearUser, loginUser, loginForm, registerForm, cerrarSesion } = require('../controllers/authController');
const { traerFranelas, verFranela, crearContacto, contactoForm, nosotros } = require('../controllers/tiendaController');
const verificarUser = require('../middlewares/verificarUser');
const router = express.Router()

router.get('/', verificarUser, traerFranelas)

router.get('/register', registerForm);
router.post('/register',[
   body("nombre", "Ingrese un nombre")
      .trim()
      .notEmpty()
      .escape(),
   body("email", "Ingrese un email válido")
      .trim()
      .isEmail(),
   body("password", "Contraseña con 8 o más carácteres")
      .trim()
      .isLength({ min: 8 })
      .escape()
      .custom((value, { req }) => {
         if (value !== req.body.repeatPassword) {
            throw new Error("Contraseñas no coinciden");
         } else {
            return value;
         }
      }),
], crearUser);

router.get('/login', loginForm);
router.post('/login',[
   body("email", "Ingrese un email válido")
      .trim()
      .isEmail(),
   body("password", "Contraseña con 8 o más carácteres")
      .trim()
      .isLength({ min: 8 })
      .escape()
], loginUser);

router.get('/nosotros', verificarUser, nosotros)

router.get('/contacto', verificarUser, contactoForm)
router.post('/contacto', verificarUser, [
   body("nombre", "Ingrese un nombre")
      .trim()
      .notEmpty()
      .escape(),
   body("apellido", "Ingrese un apellido")
      .trim()
      .notEmpty()
      .escape(),
   body("email", "Ingrese un email válido")
      .trim()
      .isEmail(),
   body("mensaje", "Mensaje con 18 o más carácteres")
      .trim()
      .isLength({ min: 18 })
      .escape()
], crearContacto)

router.get('/producto/:id', verificarUser, verFranela)

router.get('/logout', cerrarSesion);

module.exports = router