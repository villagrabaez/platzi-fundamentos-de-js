var bernardino = {
  nombre: "Bernardino",
  apellido: "Villagra",
  edad: 27,
  ingeniero: true,
  cocinero: true,
  bailarin: false,
  guitarrista: true
}

var juan = {
  nombre: "Juan",
  apellido: "Gomez",
  edad: 13
}

function imprimirProfesion(persona) {
  console.log(`${persona.nombre} es: `)
  
  if (persona.ingeniero) {
    console.log('Ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.bailarin) {
    console.log('Bailarin')
  }

  if (persona.guitarrista) {
    console.log('Guitarrista')
  }
}

const MAYORIA_DE_EDAD = 18

// function esMayorDeEdad(persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// arrow functions

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD

function imprimirSiEsMenorDeEdad(persona) {
  if (esMenorDeEdad(persona)) {
    console.log(`${persona.nombre} es menor de edad`)
  } else {
    console.log(`${persona.nombre} es mayor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO DEGADO')
  }
}

imprimirProfesion(bernardino)
imprimirSiEsMayorDeEdad(bernardino)
permitirAcceso(bernardino)
imprimirSiEsMenorDeEdad(juan)
permitirAcceso(juan)
