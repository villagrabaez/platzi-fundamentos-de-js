// Declarar variables en Javascript

var name = 'Bernardino';
var last_name = 'Villagra';

// Como pasar un string a Mayusculas
var nameUpper = name.toUpperCase();
var last_nameUpper = last_name.toUpperCase();

// Como pasar un string a Minusculas
var nameLower = name.toLowerCase();
var last_nameLower = last_name.toLowerCase();

// Como obtener una letra de un string
var firstLetterName = name.charAt(0);
var firstLetterLastName = last_name.charAt(0);

// Como saber que cantidad de letras tiene un string
var cantidadLetrasDelNombre = name.length;
var cantidadLetrasDelApellido = last_name.length;

// Como obtener letras de un string
var str = name.substr(6,4);

// Obtener ultima letra de un string
var ultimaLetra = name.charAt(name.length - 1);

console.log(nameLower + ' ' + last_nameLower);
console.log('La primera letra del nombre es: ' + firstLetterName);
console.log('La primera letra del apellido es: ' + firstLetterLastName);
console.log('La cantidad de letras que tiene el nombre es: ' + cantidadLetrasDelNombre);
console.log('La cantidad de letras que tiene el apellido es: ' + cantidadLetrasDelApellido);