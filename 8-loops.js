console.log(`trabalhando com condicionais`)

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

const idadeComprador = 21
const pessoaAcompanhada = false
let passagemComprada = false
const destino = 'Salvador'

console.log('Destinos possiveis: ')
console.log(listaDestinos)

const destinoRemover = listaDestinos.splice(2, 1)

console.log('Embarque: \n ')

const podeComprar = idadeComprador >= 18 || pessoaAcompanhada == true

let contador = 0
let destinoExiste = false

for (let cont = 0; cont < 3; cont++) {
  if (listaDestinos[contador] == destino) {
    destinoExiste = true
    console.log('Destino existente!')
    break
  }
}

console.log('Destino existe: ', destinoExiste)

if (podeComprar && destinoExiste) {
  console.log('Boa Viagem!!')
} else {
  console.log('Erro no sistema!')
}
