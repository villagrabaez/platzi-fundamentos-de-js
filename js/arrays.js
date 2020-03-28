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
  altura: 1.48
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

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura}mts`)
}