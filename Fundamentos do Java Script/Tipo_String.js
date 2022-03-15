// Tipo String

const texto1 = "Olá, Mundo!"; // Para string podem ser aspas duplas "" ou simples ''
const texto2 = 'Olá, Mundo!';
const senha = 'senhaSuperSegura456'; // As aspas serve para o JS entender como uma cadeira de char
const stringDeNumero = '34567';

// E como fazer uma citação?
const citacao = 'O Leo disse "oi!"'; // Por isso o JS aceita os dois tipos de aspas
console.log(citacao)

// E se eu trocar as ordens das aspas?
const citacao2 = "O Leo disse 'oi!'";
console.log(citacao2)

// Concatenação -> juntar duas partes de texto (+)
const cit = "Meu nome é: ";
const meuNome = 'Lui Magno';
console.log(cit + meuNome) // Isso é uma concatenação.
// Pesquisar sobre: template string ou template literal! 
//////////////////////////////////////////////////////////////

// Para saber mais: Codificação de Strings

/* Com o advento do Unice (UTF) temos código específico para cifrar e decifrar mais de 150 idiomas
antigos e modernos, e também diversos outros conjuntos de caracteres como símbolos matemáticos
e  inclusive emojis.
*/

// Vamos testar a transformação do código Unicode em caractere utilizando o console.log()

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// o \u no começo das strings são caracteres de escape, pois estamos em Unicode e não string

// Para saber mais: Trabalhando com string

// Padronizar comparação entre strings?
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

/* As duas teriam o mesmo valor, mas o JS é case sensitive, ou seja, as duas não são iguais
pois uma não começa com letra maíuscula. */

// Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto certo

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

/* Acima vemos o método nativo do JavaScript "input.toLowerCase" transformando a frase do input2
em uma frase com todos os caracteres minúsculos, fazendo assim a comparação com cidade2 retornar
TRUE
*/

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres - uma das funções imbutidas mais importantes

// Qual a diferença entre um método com () no final e um sem?