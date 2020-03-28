// Definir un prototipo

// function Persona(nombre, apellido, altura){
//   // atributos
//   this.nombre = nombre
//   this.apellido = apellido
//   this.altura = altura
// }

// metodos
// Persona.prototype.saludar = function () {
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// Persona.prototype.soyAlto = function () {
//   return this.altura > 1.80
// }

// function Desarrollador(nombre, apellido) {
//   this.nombre = nombre
//   this.apellido = apellido
// }

// Desarrollador.prototype.saludar = function () {
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
// }

class Persona {

  constructor(nombre, apellido, altura) {
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura
  }

  saludar(fn) {

    var {nombre, apellido} = this

    console.log(`Hola, me llamo ${nombre} ${apellido}`)

    if (fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura > 1.80
  }
}

class Desarrollador extends Persona {

  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {

    var {nombre, apellido} = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)

    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)

  if (esDev) {
    console.log(`Ah mirá, no sabia que eras desarrollador/a`)
  }
}

var bernardino = new Persona('Bernardino', 'Villagra', 1.72)
var erika = new Persona('Erika', 'Villar', 1.65)
var arturo = new Desarrollador('Arturo', 'Lopez', 1.88)

bernardino.saludar()
// bernardino.soyAlto()
erika.saludar(responderSaludo)
// erika.soyAlto()
arturo.saludar(responderSaludo)
// arturo.soyAlto()
