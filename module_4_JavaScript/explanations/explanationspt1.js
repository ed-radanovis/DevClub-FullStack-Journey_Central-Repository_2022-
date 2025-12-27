// VARIÁVEIS
// PERMITIDO:
// - Iniciar com $ ou _
// - Colocar acentos
// - Iniciar com letras
// - Letras maiúsculas e minúsculas

// NÃO É PERMITIDO:
// - Iniciar com números
// - Colocar espaços

// IDEAl:
// - Camel case (ex. de padrão: quantidadeDeMacasNoPote)
// - Snake case (ex. de padrão: quantidade_de_macas_no_pote)
// - sempre em Inglês
// - Nomes que façam sentido e que sejam relacionados ao código

var number1 = 1; // => NÃO USAR
let number2 = 2; // => USAR QD O VALOR PODERÁ SE ALTERAR
const number3 = 3; // => O VALOR NUNCA SE ALTERA

number1 = 40; // nestes dois casos o valor mudará para o que foi unserido aqui
number2 = 30;

console.log(number1);
console.log(number2);
console.log(number3);

console.log();
// STRINGS
// - São cadeias de caracteres
let myFirstString = "Com aspas DUPLAS";
let mySecondString = "Com aspas SIMPLES";
let myThirdString = `Com CRASES`; /* conhecido como template literals ou template strings  ...
...  aceita variáveis, quebra de linhas, contas(usar a tag ${}), etc.*/
console.log(myFirstString);
console.log(mySecondString);
console.log(myThirdString);

console.log();
// NUMBERS
// - São Números, contas, etc.
const numberZero = 50;
const numberOne = (300 / 2) * 3;
const numberTwo = "300/2*3"; /* isto é uma string*/
const result = numberZero + numberOne;

console.log(numberOne);
console.log(numberTwo);
console.log(result);

console.log();
// OBJETS
// - São objetos, pessoas, etc.
// - Eles tem propriedades (ex. televisão: marca: sansung
//                                         cor: preta
//                                         tamanho: 40")
// - Aceitam objetos dentro de objetos (ex. const person = {
//     name: "Edmar Radanovis",
//     age: 41,
//     height: 1.80,
//     sex: "Male",
//     address: {
//         street: "R Boa Vista",
//         number: "570",
//         district: "MOCOCA"}
//     }
//   console.log(prson.address.strett)     <=== PARA ACESSAR A PROPRIEDADE DO OBJETO DENTRO DO OBJETO
const person = {
  name: "Edmar Radanovis",
  age: 41,
  height: 1.8,
  sex: "Male",
  address: "R Boa Vista 570 MOCOCA",
};
console.log(person);
console.log(person.name); // que o mesmo que este modo de representar ... console.log(person['name'])
// porém para acessar mais do que uma propriedade necessário usar o FOR IN (demonstrado mais a frente)
console.log();
// BOOLEANS
// - ou boleanos  são os "binários" ou seja 1 e 0 porém são mencionados como True or False onde True = 1 e False = 0
// - um sinal de = é ATRIBUIÇÃO , dois ou três sinais de = (ex. == , ===) é COMPARAÇÃO
let numberFour = 10;
let numberFive = 20;

console.log((numberFour = numberFive));

console.log();
let numberSix = 10;
let numberSeven = 20;

console.log(numberSix == numberSeven);

console.log();
let numberEight = 20;
let numberNine = 20;

console.log(numberEight == numberNine);

console.log();
// ARRAY
// - São vetores, listas.
// - Começam pela posição 0 (zero)
// - Armazenam tipos diferentes e mesclados (strings + números + obejetos, etc.)
// - Para consutar qt total de itens de uma ARRAY usar **length** ->  ex:console.log(array.length)
const array = [10, 20, 30, 100];
console.log(array);
console.log(array[1], array[3]);

console.log();
const people = [
  {
    name: "Edmar Radanovis",
    age: 41,
    height: 1.8,
    sex: "Male",
    address: "R Boa Vista 570 MOCOCA",
  },
  {
    name: "Derek F.B. Radanovis",
    age: 8,
    height: 1.2,
    sex: "Male",
    address: "R Boa Vista 570 MOCOCA",
  },
  {
    name: "Mellanie F.B. Radanovis",
    age: 11,
    height: 1.4,
    sex: "Female",
    address: "R Boa Vista 570 MOCOCA",
  },
];
console.log(people[1]);

console.log();
// MATH
// - É uma biblioteca no JS.
// - ferramentas facilitadoras

// console.log(Math.) // O autocomplete encaminha para todas as ferramentas.
console.log(Math.PI); // Apresenta o valor de PI.
console.log(Math.pow(2, 3)); // Permite utilização de potências.
console.log(Math.sqrt(9, 2)); // Permite utilização de raízes.
console.log(Math.random()); // Apresenta o valor aleatório entre 0 e 1.
console.log(Math.ceil(24.35)); // Arredondar um número "para cima".
console.log(Math.floor(24.35)); // Arredondar um número "para baixo".

console.log();
// OPERADORES ARITMÉTICOS
// +   -> Adição
console.log(20 + 20);
// -   -> Subtração
console.log(40 - 20);
// *   -> Multiplicação
console.log(20 * 20);
// /   -> Divisão
console.log(7 / 3);
// %   -> Resto
console.log(7 % 3);
console.log(11 % 11);
// ++  -> Incremento
let numberTen = 30;
numberTen++; // increnenta 1 qts vezes forem necessárias
numberTen++; // ex. mais uma vez
numberTen++; // ex. mais duas vezes

/*let numberTen = 30
console.log(numberTen++)    => neste exemplo ao imprimir o programa resulta em 30 pq 1º ele executa o nº e depois incrementa
let numberTen = 30
console.log(++numberTen)    => o correto será este exemplo ao imprimir o programa resulta em 31 pq 1º ele incrementa o nº e depois executa*/

// --  -> Decremento
let numberEleven = 30;
numberEleven--; // decrenenta 1 qts vezes forem necessárias
numberEleven--; // ex. mais uma vez
numberEleven--; // ex. mais duas vezes
console.log(numberEleven);
/*outra forma  -> 
let numberEleven = 30 
console.log(--numberEleven)*/

// **  -> Exponencial
console.log(Math.pow(2, 3));
// ou
console.log(2 ** 3);

console.log();
// OPERADORES DE ATRIBUIÇÕES  ... é um modo de abreviar o código

// =   ->  Atribuição
// ex: let numberTwelve = 10

// +=  ->  Adição
let numberTwelve = 10;
numberTwelve += 2; // é o mesmo que ... numberTwelve = numberTwelve + 2
console.log(numberTwelve);
// -=  ->  Subtração
let numberThirteen = 10;
numberThirteen -= 2; // é o mesmo que ... numberThirteen = numberThirteen - 2
console.log(numberThirteen);
// /=  ->  Divisão
let numberFourteen = 10;
numberFourteen /= 2; // é o mesmo que ... numberFourteen = numberFourteen / 2
console.log(numberFourteen);
// *=  ->  Multiplicação
let numberFifteen = 10;
numberFifteen *= 2; // é o mesmo que ... numberFifteen = numberFifteen * 2
console.log(numberFifteen);
// %=  ->  Resto
let numberSixteen = 10;
numberSixteen %= 3; // é o mesmo que ... numberSixteen = numberSixteen % 3
console.log(numberSixteen);

console.log();
// OPERADORES DE COMPARAÇÕES
// =    -> Atribui valor
//   ex:  const numberSeventeen = "23"  (string)
//   ex:  const numberEighteen = 23     (number)

// ==   ->  IGUAL, ele compara o valor, mas não compara o tipo do valor
const numberNineteen = "23";
const numberTwenty = 23;
console.log(numberNineteen == numberTwenty);
// ===  ->  TOTALMENTE IGUAL, ele verifica o tipo do dado
const numberTwentyOne = "23";
const numberTwentyTwo = 23;
console.log(numberTwentyOne === numberTwentyTwo);
// !=   ->  DIFERENTE, ele compara o valor, mas não compara o tipo do valor
const numberTwentyThree = "23";
const numberTwentyFour = 23;
console.log(numberTwentyThree != numberTwentyFour);
// !==  ->  TOTALMENTE DIFERENTE, ele verifica o tipo do dado
const numberTwentyFive = "23";
const numberTwentySix = 23;
console.log(numberTwentyFive !== numberTwentySix);
// >    ->  MAIOR
const numberTwentySeven = 10;
const numberTwentyEight = 20;
console.log(numberTwentySeven > numberTwentyEight);
// >=   ->  MAIOR ou IGUAL
const numberTwentyNine = 20;
const numberThirty = 20;
console.log(numberTwentyNine >= numberThirty);
// <    ->  MENOR
const numberThirtyOne = 10;
const numberThirtyTwo = 20;
console.log(numberThirtyOne < numberThirtyTwo);
// <=   ->  MENOR ou IGUAL
const numberThirtyThree = 10;
const numberThirtyFour = 10;
console.log(numberThirtyThree <= numberThirtyFour);
// PARA TUDO MENCIONADO EM OPRADORES (PARA TESTE) PODE SUBSTITUIR AS CONST PELOS Nºs
// NA IMPRESSÃO  *** ex.  console.log(10 <= 10)

console.log();
// OPERADORES LÓGICOS

// &&   ->  E
// true && true = true  (indiferente se houver 15 true's se houver 1 false ele entende como FALSO)
// true && false = false
// false && false = false
console.log(true && true && true && true && false);
console.log(true && false);
console.log(false && false);

// ||   ->  OU
// true || true = true
// true || false = true  (indiferente se houver 15 false's se houver 1 true ele entende como VERDADEIRO)
// false || false = false
console.log(true || true);
console.log(true || false || false || false || false);
console.log(false || false);

// !    ->  NEGAÇÃO
// !true = false  (negam as afirmações)
// !false = true  (negam as afirmações)
console.log(!true);
console.log(!false);
console.log(!(true && true && true));
// ex: de como pode ficar a aplicação  ...  console.log(!(!(true && true && true) && ! (false && true || true)))

console.log();
// OPERADORES TERNÁRIOS ou CONDICIONAIS

// ?   ->  SE
// :   ->  SE NÃO
const rain = true;
const umbrela = rain ? "levar guarda-chuva" : "deixar guarda-chuva";
// no exemplo à esquerda dele vem a condição (no caso rain) se a condição for VERDADEIRA
// ele assume o 1º valor (nete caso 'levar o guarda-chuva') e se for FALSA ele assume
// o 2º valor (nete caso 'deixar o guarda-chuva')
console.log(umbrela);

// novo exemplo abaixo:
// PRECISO EFETUAR UMA TRANFERÊNCIA.
const balance = true; // (tem saldo em conta?)
const isNotBlocked = true; // (a conta está bloqueada?)
const accountExist = true; // (a conta que receberá a transf. existe?)

const transfOk =
  balance && isNotBlocked && accountExist
    ? "Transferência realizada"
    : "Transferência negada";
console.log(transfOk);

console.log();
// OPERADORES TYPEOF e DELETE
const numberTypeof = 20;
const stringTypeof = "Olá, sou uma string";

const objectTypeof = {
  name: "Object",
};

console.log(typeof numberTypeof);
console.log(typeof stringTypeof);
console.log(typeof objectTypeof);

const objectTypeofOne = {
  name: "Edmar",
  age: 42,
  height: 1.8,
  sex: "Male",
  sons: 2,
};
delete objectTypeofOne.sex;
delete objectTypeofOne.sons;
console.log(objectTypeofOne);

console.log();
// CONTROLADORES DE FLUXO - CONDICIONAIS - IF , ELSE e ELSE IF

// if = SE
if (true) {
  console.log("se verdadeiro executa IF");
}
if (false) {
  console.log("se falso NÃO executa");
}
// novo exemplo IF abaixo:
const age = 18;
if (age >= 18) {
  console.log("A PESSOA É MAIOR DE IDADE");
}

// else = SE NÃO
// ... necessita de uma condicional

// if(true){
//     console.log('se verdadeiro executa IF')
// }
// else {
//     console.log('se falso executa ELSE')
// }

// novo exemplo ELSE abaixo:
const ageOne = 23;

if (ageOne >= 18) {
  console.log("a pessoa É maior de idade");
} else {
  console.log("a pessoa é NÃO É maior de idade");
}

// else if = MAIS SE ...
const temperature = 37.1;
if (temperature >= 35 && temperature <= 37) {
  console.log("a pessoa está SAUDÁVEL");
} else if (temperature > 37) {
  // aceita qts ELSE IF forem necessários para as comparações
  console.log("a pessoa está COM FEBRE");
} else {
  console.log("a pessoa está com a temperatura muito baixa, PROCURE UM MÉDICO");
}

console.log();
// CONTROLADORES DE FLUXO - CONDICIONAIS - SWITCH CASE
const temperatureSwitchCase = 30;
switch (temperatureSwitchCase) {
  case 30:
    console.log("temperatura MUITO abaixo do normal");
    break;

  case 33:
    console.log("temperatura abaixo do normal");
    break;

  case 36:
    console.log("temperatura normal");
    break;

  default:
    console.log("temperatura não encontrada");
    break;
}

console.log();
// novo exemplo abaixo:
// UTILIZANDO BOOLEANS.
const bool = 1;
switch (bool) {
  case true:
    console.log("It's true");
    break;

  case false:
    console.log("It's false");
    break;

  default:
    console.log("It's Undefined");
    break;
}

console.log();
// ESTRUTURAS DE REPETIÇÃO  -  FOR
// * para efetiva funcionalidade necessário estrutura padrão
// dentro dos () inserir os 3 parâmetros a seguir separando-os com ;
// 1º -> VARIÁVEL 'i' (obs. i de index) com valor
// 2º -> CONDICIONAL ou seja, até quando será repetido
// OBS.: o FOR executa os dois primeiros passos e acrescenta o terceiro
// 3º -> qual evento a cada ciclo (o que vai acontecer sempre que for repetido)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log();
// Enquanto não terminar todas as execusões ele não vai para uma nova execusão
// ex:
for (let i = 2; i <= 10; i++) {
  console.log(i);
}

console.log("Terminou meu FOR");

console.log();
// ex: prático do FOR usando uma ARRAY
const students = ["Maria", "Ana", "José", "João", "Antonio"];

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i]} está presente a aula`);
}

console.log();
// ESTRUTURAS DE REPETIÇÃO  -  WHILE(enquanto)
// enquanto for VERDADEIRO ele continua executando ex: // while (true) {
//     console.log('algo')
//  }  *** neste caso vai executar infinitamente até q se mude o parâmetro
// Usar qd o evento não é previsível
let i = 0;
while (i < 20) {
  console.log(i);
  i += 2;
}
console.log();
// novo exemplo abaixo:
let iTwo = 400000200;
while (iTwo > 20) {
  console.log(iTwo);
  iTwo /= 50;
}

console.log();
// ESTRUTURAS DE REPETIÇÃO  -  FOR OF
// diferente do FOR não necessita que insira até quando será repetido
// vai executando até o final da STRING ou do ARRAY
// normalmente usado para interar item a item de uma ARRAY
let myName = "Edmar";

for (let name of myName) {
  console.log(name);
}

console.log();
// ex: prático do FOR OF usando uma ARRAY
let allNames = ["Maria", "Joana", "Joaquim", "Carlos"];

for (let names of allNames) {
  console.log(names);
}

console.log();
// ESTRUTURAS DE REPETIÇÃO  -  FOR IN
// similar ao FOR OF só que utilizado para objetos

const student = {
  name: "Caio",
  age: 40,
  sex: "Male",
};

for (let property in student) {
  console.log(property);
}

console.log();
// ex: usando para apresentar os dados das propriedades
const studentOne = {
  name: "Caio",
  age: 40,
  sex: "Male",
};

for (let property in studentOne) {
  console.log(studentOne[property]);
}

console.log();
// ex: usando para apresentar as propriedades e os dados das propriedades
const studentTwo = {
  name: "Caio",
  age: 40,
  sex: "Male",
};

for (let property in studentTwo) {
  console.log(`${property} : ${studentTwo[property]}`);
}

console.log();
