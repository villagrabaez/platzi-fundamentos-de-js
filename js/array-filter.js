var jose = {
  nombre: "Jose",
  apellido: "Perez",
  edad: 68,
  altura: 1.88
}

var marlene = {
  nombre: "Marlene",
  apellido: "Villar",
  edad: 33,
  altura: 1.58
}

var juan = {
  nombre: "Juan",
  apellido: "Gonzalez",
  edad: 44,
  altura: 1.78
}

var vicky = {
  nombre: "Vicky",
  apellido: "Gomez",
  edad: 18,
  altura: 1.81
}

var bernardino = {
  nombre: "Bernardino",
  apellido: "Villagra",
  edad: 28,
  altura: 1.72
}

var personas = [
  jose,
  marlene,
  juan,
  vicky,
  bernardino
]

const esAlta = persona => persona.altura > 1.80
const esBaja = persona => persona.altura < 1.80

// var personaAltas = personas.filter(function (persona) {
  //   return persona.altura > 1.80
  // })
  
  // var personaBajas = personas.filter(function (persona) {
  //   return persona.altura < 1.80
  // })
    
var personaAltas = personas.filter(esAlta)
var personaBajas = personas.filter(esBaja)

console.log(`Total de personas altas: ${personaAltas.length}`)
console.log(`Total de personas bajas: ${personaBajas.length}`)
console.log(`Total de personas: ${personas.length}`)
