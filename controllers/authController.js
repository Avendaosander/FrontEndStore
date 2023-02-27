const Users = require('../models/Users')

const crearUser = async (req, res, next) => {
   const { nombre, email, password } = req.body;
   try {
      let user = await Users.findOne({ email });
      if (!user) throw new Error('Ya existe este usuario');
      
      user = new Users({nombre, email, password});
      // console.log(user);
      await user.save();
      res.redirect('/')
   } catch (error) {
      console.log(error.message);
      res.send('Fallo algo...');
   }
}

const loginUser = async(req, res) => {
   const { email, password } = req.body;
   try {
      let user = await Users.findOne({email});
      if (!user) throw new Error('No existe este usuario');

      if(!await user.comparePassword(password)) throw new Error('La contraseña no es correcta');
      // console.log(user);
      res.redirect('/');
   } catch (error) {
      console.log(error);
      res.send(error.message);
   }
}

module.exports = {
   crearUser,
   loginUser
};