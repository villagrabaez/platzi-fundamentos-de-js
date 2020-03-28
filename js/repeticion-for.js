var bernardino = {
  nombre: "Bernardino",
  apellido: "Villagra",
  edad: 27,
  peso: 60
}

console.log(`Al inicio del año ${bernardino.nombre} pesa ${bernardino.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO

const bajaDePeso = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    //aumentaDePeso
    aumentaDePeso(bernardino)
  } else if (random < 0.50) {
    bajaDePeso(bernardino)
  } else {
    //noPasoNada
  }
}

console.log(`Al final del año ${bernardino.nombre} pesa ${bernardino.peso.toFixed(1)}kg`)
