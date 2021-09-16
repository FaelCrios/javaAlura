console.log(`trabalhando com listas`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

listaDestinos.push(`Curitiba`) //Desta forma, o comando .push() serve para inserirmos itens dentro de uma lista//array

console.log('Destinos possiveis: ')
console.log(listaDestinos)

console.log('Que pena, o pacote para São Paulo acabou sobraram esses..')
listaDestinos.splice(1, 1)
console.log(listaDestinos)
console.log(listaDestinos[1])
