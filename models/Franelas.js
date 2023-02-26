const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const franelasSchema = new Schema({
   src: { 
      type: String,
      unique: true,
      required: true
   },
   name: {
      type: String,
      unique: true,
      required: true
   },
   descripcion: {
      type: String,
      required: true
   },
   price: {
      type: String,
      required: true
   }
});

const Franelas = mongoose.model('Franelas', franelasSchema);
module.exports = Franelas