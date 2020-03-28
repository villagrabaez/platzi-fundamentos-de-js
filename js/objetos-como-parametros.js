var bernardino = {
  nombre: 'Bernardino',
  apellido: 'Villagra',
  edad: 27,
}

console.log(bernardino);

function birthday(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  }
}

var bernardinoViejo = birthday(bernardino);
console.log(bernardinoViejo);