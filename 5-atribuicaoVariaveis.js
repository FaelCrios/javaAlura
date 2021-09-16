console.log('Trabalhando com atribuição de variaveis')

const idade = 12
let primeiroNome = 'Rafael'
const sobrenome = ' Colin'
let ano = 2021

console.log(primeiroNome + sobrenome)
console.log(primeiroNome, sobrenome, sobrenome)

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`)
//no JS mais atual, é possivel interpolar variaveis, usando o ${variavel}, para inserir mais uma varíavel

const nomeCompleto = primeiroNome + sobrenome

console.log('meu nome completo é', nomeCompleto)

//sempre declrar o tipo de variavel, para não subir para um escopo global
//mes = 'Janeiro'
primeiroNome = 2
console.log('Agora meu nome é ', primeiroNome)
