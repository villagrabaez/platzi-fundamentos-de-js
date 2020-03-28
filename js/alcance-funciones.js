// Alcance de las funciones

// Variable global
var name = 'Bernardino';

function printnInUpperCase(name = null) {
  if (name) {
    // name es una variable local dentro de la funcion, diferente a la variable name global
    return name.toUpperCase();
  } else {
    return 'No hay nombre';
  }
}


function printnInLowerCase(name = null) {
  if (name) {
    // name es una variable local dentro de la funcion, diferente a la variable name global
    return name.toLowerCase();
  } else {
    return 'No hay nombre';
  }
}

console.log(printnInUpperCase('Julio'));
console.log(printnInLowerCase('PEPITO'));
console.log(printnInLowerCase(name));