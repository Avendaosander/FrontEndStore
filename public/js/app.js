const url = window.location.origin;
const urlActual = document.URL;
const navTienda = document.getElementById('tienda') 
const navNosotros = document.getElementById('nosotros') 
const navContacto = document.getElementById('contacto') 
const body = document.querySelector('body')
const header = document.querySelector('header')
const nav = document.querySelector('nav')

if (urlActual == `${url}/`) {
   navTienda.classList.toggle('nav_enlace-activo')
}
if (urlActual == `${url}/nosotros`) {
   navNosotros.classList.toggle('nav_enlace-activo')
}
if (urlActual == `${url}/contacto`) {
   navContacto.classList.toggle('nav_enlace-activo')
}
if (urlActual == `${url}/login` || urlActual == `${url}/register`) {
   body.classList.toggle('contenedorAuth')
   header.style.display = 'none';
   nav.style.display = 'none';
}

const cantidad = Number(document.getElementById('cantidad'));
const total = document.getElementById('total')