console.log(`trabalhando com condicionais`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

const idadeComprador = 21
const pessoaAcompanhada = false

console.log('Destinos possiveis: ')
console.log(listaDestinos)

const destinoRemover = listaDestinos.splice(2, 1)

if (idadeComprador >= 18 || pessoaAcompanhada) {
  console.log(
    'compra possível de ser feita, maior de idade ou está acompanhado.'
  )
  destinoRemover //removendo item caso for maior de idade
  console.log(listaDestinos)
} else {
  console.log('Proibido a venda para menores de idades desacompanhados.')
}
