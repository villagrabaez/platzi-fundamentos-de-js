const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`

const OPTS = { crossDomain: true }

// const ON_PEOPLE_REQUEST = function (people) {
//   console.log(`Hola yo soy ${people.name}`)
// }

function obtenerPersonaje(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
    .get(URL, OPTS, callback)
    .fail( () => {
    console.log(`Ocurrió un error, no se pudo obtener el personaje ${id}`)
  })
}

obtenerPersonaje(1, function (people) {
  console.log(`Hola yo soy ${people.name}`)
  obtenerPersonaje(2, function (people) {
    console.log(`Hola yo soy ${people.name}`)
    obtenerPersonaje(3, function (people) {
      console.log(`Hola yo soy ${people.name}`)
      obtenerPersonaje(4, function (people) {
        console.log(`Hola yo soy ${people.name}`)
        obtenerPersonaje(5, function (people) {
          console.log(`Hola yo soy ${people.name}`)
          obtenerPersonaje(6, function(people) {
            console.log(`Hola yo soy ${people.name}`)
            obtenerPersonaje(7, function (people) {
              console.log(`Hola yo soy ${people.name}`)
            })
          })
        })
      })
    })
  })
})
