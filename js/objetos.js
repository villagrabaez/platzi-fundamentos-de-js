// Objetos en Javascript

// Definicion de objetos
var bernardino = {
  nombre: 'Bernardino',
  apellido: 'Villagra Báez',
  edad: 27,
  telefono: '0981268219',
  pais: 'Paraguay',
  ciudad: 'San Estanislao',
}

var jose = {
  nombre: 'Jose',
  apellido: 'Báez',
  edad: 27,
  telefono: '0981268219',
  pais: 'Paraguay',
  ciudad: 'San Estanislao',
}

var veronica = {
  nombre: 'Veronica',
  apellido: 'Lopez',
  edad: 27,
  telefono: '0981268219',
  pais: 'Paraguay',
  ciudad: 'San Estanislao',
}

// Diferentes formas de pasar objetos a una funcion

// function printNameInUpperCase(nombre) {
//   return nombre.toUpperCase();
// }

// console.log(printNameInUpperCase(bernardino.nombre));
// console.log(printNameInUpperCase(jose.nombre));
// console.log(printNameInUpperCase(veronica.nombre));

//--------------------------------------------------------

// function printNameInUpperCase(persona) {
//   return persona.nombre.toUpperCase();
// }

// console.log(printNameInUpperCase(bernardino));
// console.log(printNameInUpperCase(jose));
// console.log(printNameInUpperCase(veronica));

//--------------------------------------------------------

function printNameInUpperCase({nombre}) {
  return nombre.toUpperCase();
}
  
console.log(printNameInUpperCase(bernardino));
console.log(printNameInUpperCase(jose));
console.log(printNameInUpperCase(veronica));
console.log(printNameInUpperCase({nombre: 'pepito'}));