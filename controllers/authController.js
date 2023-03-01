const Users = require('../models/Users')
const { validationResult } = require('express-validator');
const { request } = require('../app');

const registerForm =  (req, res) =>{
   res.render('register', {"mensajes": req.flash('mensajes')});
}
const crearUser = async (req, res, next) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()) {
      req.flash("mensajes", errors.array());
      return res.status(404).redirect('/register')
   }
   const { nombre, email, password } = req.body;
   try {
      let user = await Users.findOne({ email });
      // console.log(user);
      if (user) throw new Error('Ya existe este usuario');
      
      user = new Users({nombre, email, password});
      // console.log(user);
      await user.save();
      req.login(user, function(err){
         if(err) throw new Error('Error al craer la sesion');
         return res.status(200).redirect('/');
      });
   } catch (error) {
      // console.log(error.message);
      req.flash("mensajes", [{msg: error.message}]);
      return res.status(404).redirect('/register')
   }
}
const loginForm = (req, res) => {
   res.status(200).render('login', {"mensajes": req.flash('mensajes')});
}
const loginUser = async(req, res) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()) {
      req.flash("mensajes", errors.array());
      return res.status(404).redirect('/login')
   }
   const { email, password } = req.body;
   try {
      let user = await Users.findOne({email});
      // console.log('Aqui estoy')
      if (!user) throw new Error('No existe este email');

      if(!(await user.comparePassword(password))) throw new Error('La contraseña no es correcta');
      // Crea la sesion de usuario a traves de passport
      req.login(user, function(err){
         if(err) throw new Error('Error al craer la sesion');
         // console.log('Aqui estoy');
         return res.status(200).redirect('/');
      });
   } catch (error) {
      req.flash("mensajes", [{msg: error.message}]);
      return res.status(404).redirect('/login')
   }
}

const cerrarSesion = (req, res, next) => {
   req.logout(function(err) {
      if (err) { return next(err); }
      return res.status(200).redirect('/login');
   });
}

module.exports = {
   registerForm,
   crearUser,
   loginForm,
   loginUser,
   cerrarSesion
};