/* Tipo Number
 O JavaScript trabalha com os número de uma forma que é dele! Quando um programa precisa reter 
 um valor para utilizar no futuro, a gente já sabe que utilizamos variáveis
*/

// Guardar um tipo de dado específico

const meuNumero = 3;

const primeiroNumero = 2;
const segundoNumero = 3;



// Operações matemáticas simples -> Soma, Subtração, Multiplicação
// e Divisão
const operacaoSoma = primeiroNumero + segundoNumero;
console.log(operacaoSoma)

const operacaoSubtracao = primeiroNumero - segundoNumero
console.log(operacaoSubtracao)

const operacaoMultiplicacao = primeiroNumero * segundoNumero
console.log(operacaoMultiplicacao)

const operacaoDivisao = primeiroNumero/segundoNumero
console.log(operacaoDivisao)

// Em JS também conseguimos trabalhar com números decimais, é o famoso
// Ponto Flutuante

const numeroPontoFlutuante = 3.3; // Agora temos um valor de ponto flutuante, basta por o "."
const numeroFlutanteSemZero = .5; // Lembre-se do ";", já que em python não utilizamos

// Podemos, inclusive, realizar novas operações a partir de número inteiros e de ponto flutuante

const operacaoFlutuante = primeiroNumero + numeroPontoFlutuante
console.log(operacaoFlutuante)


// O JS tem operações simples até operações mais complexas já imbutidas

// O que é o NaN? -> Not a Number (não é um número)

const frase = 'Sou uma String'

// O que acontece se multiplicarmos a constante "frase" por um número?

console.log(primeiroNumero * frase) // Aqui vamos receber um NaN

////////////////////////////////////////////////////////////////////////////////////////////////
// Mais sobre números

/* Os tipos de JavaScript podem ser divididos em duas categorias: tipos primitivos e tipos de
objetos. Os tipos primitivos do JavaScript incluem números, palavras ou texto(conhecidos como
strings) e valores booleanos conhecidos como booleanos.
*/

// TIPOS NUMÉRICOS

const idade = 26
const pi = 3.14

// Podemos utilizar o número PI através do código Math.PI

// Divisão por 0 gera um Infinity no JavaScript

var a = 10
var b = 0
console.log(a/b)

// Agora surge uma dúvida, qual a diferença entre as variáveis const e var em JS?
