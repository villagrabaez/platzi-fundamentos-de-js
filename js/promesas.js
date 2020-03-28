const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`

const OPTS = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(URL, OPTS, function (data) {
      resolve(data)
    })
    .fail( () => reject(id))
  })
}

function onError(id) {
  console.log(`Ocurrió un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]

  // var promesas = ids.map(function (id) {
  //   return obtenerPersonaje(id)
  // })

  var promesas = ids.map(id => obtenerPersonaje(id))

  try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()

// obtenerPersonaje(1)
//   .then(people => {
//     console.log(`El personaje 1 es ${people.name}`)
//     return obtenerPersonaje(2)
//   })
//   .then(people => {
//     console.log(`El personaje 2 es ${people.name}`)
//     return obtenerPersonaje(3)
//   })
//   .then(people => {
//     console.log(`El personaje 3 es ${people.name}`)
//     return obtenerPersonaje(4)
//   })
//   .then(people => {
//     console.log(`El personaje 4 es ${people.name}`)
//     return obtenerPersonaje(5)
//   })
//   .then(people => {
//     console.log(`El personaje 5 es ${people.name}`)
//     return obtenerPersonaje(6)
//   })
//   .then(people => {
//     console.log(`El personaje 6 es ${people.name}`)
//     return obtenerPersonaje(7)
//   })
//   .then(people => {
//     console.log(`El personaje 7 es ${people.name}`)
//   })
//   .catch(onError)