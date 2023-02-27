console.log('JS FrontEnd')

const url = document.URL;
const navTienda = document.getElementById('tienda') 
const navNosotros = document.getElementById('nosotros') 
const navContacto = document.getElementById('contacto') 

if (url == 'http://localhost:3000/') {
   navTienda.classList.toggle('nav_enlace-activo')
}
if (url == 'http://localhost:3000/nosotros') {
   navNosotros.classList.toggle('nav_enlace-activo')
}
if (url == 'http://localhost:3000/contacto') {
   navContacto.classList.toggle('nav_enlace-activo')
}

const cantidad = Number(document.getElementById('cantidad'));
const total = document.getElementById('total')