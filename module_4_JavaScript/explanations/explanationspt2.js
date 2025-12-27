// FUNÇÕES / FUNCTIONS
// ex: de estrutura  =>   function name(params) {}
// * Só executam quando chamadas  => ex:  name()
// * Poder de reutilização de código, pois após criada pode ser chamada diversas vezes dentro do código

function exFunctionOne() {
  console.log("Primeiro exemplo de FUNCTION");
}

exFunctionOne();

console.log();
// FUNCTIONS : => Arguments and Parameters

function sum(numberexone1, numberexone2) {
  // podem existir "0" ou "n" PARÂMETROS -> "()"

  console.log(numberexone1 + numberexone2);
}

sum(2, 3); // Invoca (chama) a função  => invoke or call  => é aqui onde se colocam os
sum(8, 9); // valores dos Parâmetros ou seja os ARGUMENTOS.
// São válidos apenas dentro da função especificada  ... neste ex: em 'sum'

// NOTA:
// function sum(numberexone1, numberexone2){

//     console.log(numberexone1 + numberexone2)
// }
// const numberexone1 = 200    //!!*** mesmo que hajam variáveis com o mesmo nome dos parâmetros
// const numberexone2 = 300    //      da função eles não interferem nela !!!***

// sum(2,3)
// sum(8,9)

console.log();
// NOVO Ex:

function sumone(numberexone3, numberexone4) {
  console.log(numberexone3 + numberexone4);
}

const firstNumberExOne = 10;
const secondNumberExOne = 20;

sumone(firstNumberExOne, secondNumberExOne); // ** Neste ex. é assumido o valor das variáveis na função

console.log();
// FUNCTIONS : => Return

//no exemplo abaixo ao chamar a função na execução ele responde como UNDEFINED
//ou seja ele responde ao console.log da função mas depois ele não retorna
// É chamada de função tipo VOID (vazia)
function sumtwo(numberexone5, numberexone6) {
  console.log(numberexone5 + numberexone6);
}

const thirdNumberExOne = 10;
const fourthNumberExOne = 20;

console.log(`O primeiro número é ${thirdNumberExOne}`);
console.log(`O segundo número é ${fourthNumberExOne}`);
console.log(`A soma dos dois é ${sumtwo(thirdNumberExOne, fourthNumberExOne)}`);

console.log();
// NOVO Ex: com RETURN
// * A função executa até chegar no return, depois encerra

function sumtwo(numberexone7, numberexone8) {
  //const result = numberexone7 + numberexone8  // <= poderia ser estruturado desta maneira
  //return result                               //    irá depender da necessidade

  return numberexone7 + numberexone8; //  <= a mudança ocorre aqui
  console.log("perceba que não será EXECUTADO"); // <= pq a execusão pára no return !!!
}

const fifthNumberExOne = 10;
const sixthNumberExOne = 20;

console.log(`O primeiro número é ${fifthNumberExOne}`);
console.log(`O segundo número é ${sixthNumberExOne}`);
console.log(`A soma dos dois é ${sumtwo(fifthNumberExOne, sixthNumberExOne)}`);

console.log();
// NOVO Ex: com RETURN
// igual ao exemplo anterior só que representado de outra maneira

function sumthree(numberexone9, numberexone10) {
  const result = numberexone9 + numberexone10;

  return result;
}

const seventhNumberExOne = 10;
const eighthNumberExOne = 20;

console.log(`O primeiro número é ${seventhNumberExOne}`);
console.log(`O segundo número é ${eighthNumberExOne}`);

const result = sumthree(seventhNumberExOne, eighthNumberExOne); // => vantagem deste modelo é que aqui fica armazenado o valor
//     e ele poderá ser usado futuramente no código
console.log(
  `A soma dos dois é ${sumthree(seventhNumberExOne, eighthNumberExOne)}`
);

console.log();
// Conceito de funções ANÔNIMAS
const sumfour = function (numberexone11, numberexone12) {
  // <= armazena-se a função dentro de uma variável
  const resultone = numberexone11 + numberexone12;

  return resultone;
};

const ninthNumberExOne = 10;
const tenthNumberExOne = 20;

console.log(`O primeiro número é ${ninthNumberExOne}`);
console.log(`O segundo número é ${tenthNumberExOne}`);

const resultone = sumfour(ninthNumberExOne, tenthNumberExOne);

console.log(`A soma dos dois é ${sumfour(ninthNumberExOne, tenthNumberExOne)}`);

console.log();
// ARROW functions (função flecha)

/*const sumfive = function (numberexone13, numberexone14){
   const resulttwo = numberexone13 + numberexone14

   return resulttwo
}             *** essa função ficará conforme abaixo (intuito de economizar linhas de código)*/

const sumfive = (numberexone13, numberexone14) => numberexone13 + numberexone14; // não necessita expressar o return

const eleventhNumberExOne = 10;
const twelfthNumberExOne = 20;

console.log(`O primeiro número é ${eleventhNumberExOne}`);
console.log(`O segundo número é ${twelfthNumberExOne}`);

const resulttwo = sumfive(eleventhNumberExOne, twelfthNumberExOne);

console.log(
  `A soma dos dois é ${sumfive(eleventhNumberExOne, twelfthNumberExOne)}`
);

/* para a ARROW caso o código seja maior, basta colocar as chaves, porém haverá a necessidade do RETURN conforme ex. abaixo:
const sumfive = (numberexone13, numberexone14, numberexone15, numberexone16) => {
   return numberexone13 + numberexone14 + numberexone15 - numberexone16
} */

/* ex: arrow function SEM parâmetro
const sumfive = () => numberexone13 + numberexone14 

   ex: arrow function com apenas UM parâmetro (não necessita parênteses)
   const sumfive = numberexone13 => numberexone13 + numberexone14*/
