var jose = {
  nombre: "Jose",
  apellido: "Perez",
  edad: 68,
  altura: 1.88,
  libros: 29
}

var marlene = {
  nombre: "Marlene",
  apellido: "Villar",
  edad: 33,
  altura: 1.58,
  libros: 55
}

var juan = {
  nombre: "Juan",
  apellido: "Gonzalez",
  edad: 44,
  altura: 1.78,
  libros: 102
}

var vicky = {
  nombre: "Vicky",
  apellido: "Gomez",
  edad: 18,
  altura: 1.81,
  libros: 85
}

var bernardino = {
  nombre: "Bernardino",
  apellido: "Villagra",
  edad: 28,
  altura: 1.72,
  libros: 5
}

var personas = [
  jose,
  marlene,
  juan,
  vicky,
  bernardino
]

const reducer = (acum, persona) => acum + persona.libros

var totalLibros = personas.reduce(reducer, 0)

console.log(`En total hay ${totalLibros} entre todos los usarios.`)