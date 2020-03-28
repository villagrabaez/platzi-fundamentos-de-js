// Definir variables de tipo numero

var edad = 27;
var peso = 62;

// incrementar

//edad = edad + 1; 
edad += 1;

// decremntar 

// peso = peso -2;
peso -= 2;

// sumar

var sandwich = 1;
// peso = peso + sandwich;
peso += sandwich;

// restar

var jugarFutbol = 3;
// peso = peso - jugarFutbol;
peso -= jugarFutbol;

// Decimales

var precioVino = 200.3;
var total = Math.round(precioVino * 100 * 3) / 100;
var totalStr = total.toFixed(2);
var total2 = parseFloat(totalStr);

// division

var pizza = 8;
var persona = 2;
var cantidadPorcionesPersona = pizza / persona;
