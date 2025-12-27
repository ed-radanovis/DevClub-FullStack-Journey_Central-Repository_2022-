/* ARRAY/ MÉTODOS
                 => push
                 => length
                 => sort
                 => delete

                 => splice (unir)
                 => slice (fatiar)
                 => pop
                 => shift  */

//push => acrescentar itens a uma array
const exPushOne = ["João", "José", "Maria", "Ana", "Pedro", "Rita"];

exPushOne.push("Edmar", "Jessica");

console.log(exPushOne);

console.log();
// length => RECAPITULAÇÃO * informa o tamanho do array
const exLengthhOne = ["João", "José", "Maria", "Ana", "Pedro", "Rita"];

exLengthhOne.push("Edmar", "Jessica");

console.log(exLengthhOne, exLengthhOne.length);

console.log();
// sort => organiza a array em ordem alfabética
const exSortOne = ["João", "Carla", "Maria", "Ana", "Pedro", "Rita"];

exSortOne.push("Edmar", "Jessica");

console.log(exSortOne.sort());

console.log();
// delete => anula um item da array
const exDeleteOne = ["João", "Carla", "Maria", "Ana", "Pedro", "Rita"];

exDeleteOne.push("Edmar", "Jessica");

delete exDeleteOne[0];
console.log(exDeleteOne);
console.log(exDeleteOne[0]); // não perde a posição da array apena executa como undefined

console.log();
// splice => permite que retire ou coloque itens na array, porém em uma posição que for informada
// excluindo
const exSpliceOne = ["João", "Carla", "Maria", "Ana", "Pedro", "Rita"];

exSpliceOne.splice(1, 3); // => ex. de exclusão ... o 1º parâmetro indica a partir de qual posição
//                        irá começar, o 2º qual quantidade irá a excluir.
console.log(exSpliceOne);

console.log();
// inclusão
const exSpliceTwo = ["João", "Carla", "Maria", "Ana", "Pedro", "Rita"];

exSpliceTwo.splice(1, 0, "Edmar"); // => ex. de inclusão ... o 1º parâmetro indica em qual posição irá
//                        incluir, o 2º se irá substituir algum já existente.
console.log(exSpliceTwo); //                 obs. podem-se ser excluidos mais de 1 iten ex.(1,2,'Edmar')

console.log();
// slice => (fatiar) permite que retire um conjunto de itens na array.
const exSliceOne = ["João", "Carla", "Maria", "Ana", "Pedro", "Rita"];

const newExSliceOne = exSliceOne.slice(1, 3); // =>  o 1º parâmetro indica a partir de qual posição
//    irá começar, o 2º até qual posição irá selecionar.
console.log(newExSliceOne); //    Ao contrário dos demais essa modalidade cria uma nova array,
//    por isso a necessidade da criação de uma variável.
console.log();
// pop => ele simplesmente exclui o último item na array.
const exPopOne = ["João", "Carla", "Maria", "Ana", "Pedro", "Rita"];

exPopOne.pop();

console.log(exPopOne);

console.log();
// shift => ele simplesmente exclui o primeiro item na array.
const exShiftOne = ["João", "Carla", "Maria", "Ana", "Pedro", "Rita"];

exShiftOne.shift();

console.log(exShiftOne);

console.log();

//   FOR EACH  * É uma função !!!
//             * Utilizado para iteração (percorrer) de arrays
//             * Aceita até três argumentos
//                  => o 1º (item) itera todos os itens
//                  => o 2º (index) mostra o índice da array
//                  => o 3º (array completo) itera o array completamente a qtd de vezes que existir

const exForEachOne = [
  { name: "Edmar", age: 41 },
  { name: "Jesicca", age: 37 },
  { name: "João", age: 18 },
  { name: "José", age: 17 },
  { name: "Antonio", age: 21 },
  { name: "Maria", age: 34 },
  { name: "Ana", age: 25 },
];

exForEachOne.forEach((studenteForEach, index, arraycompleto) => {
  //console.log(studenteForEach)
  //console.log(index)
  //console.log(studenteForEach, index)  // => executa a array com índice ao lado
  console.log(arraycompleto);
});

console.log();
// NOVO Ex: prático (média de idade)
const exForEachTwo = [
  { name: "Edmar", age: 41 },
  { name: "Jesicca", age: 37 },
  { name: "João", age: 18 },
  { name: "José", age: 17 },
  { name: "Antonio", age: 21 },
  { name: "Maria", age: 34 },
  { name: "Ana", age: 25 },
];

let allAges = 0; // => cria-se uma variável antes da função

exForEachTwo.forEach((studenteForEach2, index) => {
  allAges += studenteForEach2.age;
});
const averageAge = allAges / exForEachTwo.length;

console.log(`A média de idade é de ${averageAge.toFixed(0)}`);

console.log();
// NOVO Ex: prático (invocar um aluno por vez)
const exForEachThree = [
  { name: "Edmar", age: 41 },
  { name: "Jesicca", age: 37 },
  { name: "João", age: 18 },
  { name: "José", age: 17 },
  { name: "Antonio", age: 21 },
  { name: "Maria", age: 34 },
  { name: "Ana", age: 25 },
];

let allAges2 = 0; // => cria-se uma variável antes da função
exForEachThree.forEach((studenteForEach3, index) => {
  console.log(
    `O nome do aluno é: ${studenteForEach3.name}, idade: ${studenteForEach3.age} anos, nº de cadastro "${index}"`
  );
  console.log();
});

console.log();

//   MAP       * É uma função !!!
//             * Cria um novo array, a partir do array percorrido (original)
//             * Cria um novo array, com a mesma quantidade de itens do array original
//             * Aceita até três argumentos
//                  => o 1º (item) itera todos os itens
//                  => o 2º (index) mostra o índice da array
//                  => o 3º (array completo) itera o array completamente a qtd de vezes que existir

// NOTA: diferentemente do FOR EACH que dá apenas acesso ao valor, o **MAP RETORNA** um valor para
//       ser armazenado e posteriormente utilizado !!!

const exMapNumbers = [1, 2, 3, 4];

const exMapOne = [
  { name: "Edmar", age: 41 },
  { name: "Jessica", age: 37 },
  { name: "João", age: 18 },
  { name: "José", age: 17 },
  { name: "Antonio", age: 21 },
  { name: "Maria", age: 34 },
  { name: "Ana", age: 25 },
];
// duplicando e alterando a array dos nºs
const newArrayMap = exMapNumbers.map((number) => {
  return number * 2; // nessa demonstração ele cria uma nova array no qual os nºs são multiplicados por 2
});

console.log(exMapNumbers); // array original
console.log(newArrayMap); // array gerado pelo map

// duplicando e alterando a array dos objetos
const newArrayMapOne = exMapOne.map((changeNames) => {
  const newNames = {
    name: changeNames.name + " Radanovis", // nessa demonstração ele cria uma nova array (de objetos)
    age: changeNames.age + 5, // ao qual inclui um sobrenome e soma 5 anos a todos.
  };
  return newNames;
});

console.log(exMapOne); // array original
console.log(newArrayMapOne); // array gerado pelo map

/*  NOTA:  Abaixo a mesma informação escrita de 3 formas diferentes

1ª forma   =>   const array = numbers.map( function(number){
                    return number *3 })

2ª forma   =>   const array = numbers.map( (number) => {
                    return number *3 })

3ª forma   =>   const array = numbers.map( number => number *3) */
console.log();

//   MAP  *  double
const exMapNumbers2 = [1, 2, 3, 4];

const exMapTwo = [
  { name: "Edmar", age: 41 },
  { name: "Jessica", age: 37 },
  { name: "João", age: 18 },
  { name: "José", age: 17 },
  { name: "Antonio", age: 21 },
  { name: "Maria", age: 34 },
  { name: "Ana", age: 25 },
];

const double = (numberOne) => numberOne * 2;

const newArrayMapTwo = exMapNumbers2.map(double); // => o (double) puxa a função de cima para ele, seria o mesmo que:
//    const newArrayMapTwo = exMapNumbers2.map(numberOne => numberOne * 2)
console.log(newArrayMapTwo);

console.log();

// NOVO Ex: de aplicação MAP  *  double
const exMapNumbers3 = [1, 2, 3, 4];

const exMapThree = [
  { name: "Edmar", age: 41 },
  { name: "Jessica", age: 37 },
  { name: "João", age: 18 },
  { name: "José", age: 17 },
  { name: "Antonio", age: 21 },
  { name: "Maria", age: 34 },
  { name: "Ana", age: 25 },
];

const double1 = (numberTwo) => numberTwo * 2;
const sum1 = (numberTwo) => numberTwo + 10;

const newArrayMapThree = exMapNumbers3.map(double1).map(sum1);

console.log(newArrayMapThree);

console.log();

//   FILTER       * É uma função !!!
//             * Cria um novo array, a partir do array percorrido (original)
//             * Cria um novo array, APENAS com os elementos  filtrados
//             * Aceita até três parâmetros
//                  => o 1º (item)
//                  => o 2º (index)
//                  => o 3º (array completo)

// NOTA: diferentemente do MAP ele cria um novo array mas não necessariamente com a mesma qt de itens do array anterior.

const exFilterOne = [
  { name: "Edmar", vip: true },
  { name: "Jessica", vip: false },
  { name: "João", vip: true },
  { name: "José", vip: true },
  { name: "Antonio", vip: false },
  { name: "Maria", vip: true },
  { name: "Ana", vip: false },
];

const onlyVips = exFilterOne.filter((client) => {
  return client.vip; // => ex ... se colocar simplesmente o **return true** imprime uma array exatamente igual
}); //    a anterior e se **return false** imprime uma array vazia

console.log(onlyVips);

console.log();
// NOVO Ex:

const studentsFilter = [
  { name: "Edmar", testGrade: 7 },
  { name: "Jessica", testGrade: 5 },
  { name: "João", testGrade: 8 },
  { name: "José", testGrade: 9 },
  { name: "Antonio", testGrade: 3 },
  { name: "Maria", testGrade: 2 },
  { name: "Ana", testGrade: 10 },
];

const newList = studentsFilter.filter((approved) => {
  // uma forma resumida de apresentar esse code seria  ... const newList = studentsFilter.filter(approved => approved.testGrade >=7
  return approved.testGrade >= 7;
  // return approved.testGrade < 7  * poderia inverter e executar os dispproved
});

console.log(newList);

console.log();
//   REDUCE       * É uma função !!!
//                * Retorna uum valor (pode ser um array, um objeto, uma string, um número, etc. )
//                * Aceita até QUATRO parâmetros
//                     => o 1º (acumulador (acc))
//                     => o 2º (valor atual (current))
//                     => o 3º (index)
//                     => o 4º (array completo)

const exReduceNumbers = [1, 2, 3, 4];

const sumReduce = exReduceNumbers.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0); // => * aqui diferente do filter e do map ele tem um valor incicial

console.log(sumReduce);

console.log();
// NOVO Ex:

const exReduceNumbersOne = [1, 2, 3, 4];

const sumReduceOne = exReduceNumbersOne.reduce((acumulador, valorAtual) => {
  return acumulador * valorAtual; // => aceita todas operações
}, 1);

console.log(sumReduceOne);

console.log();
// NOVO Ex:

const exReduceNumberTwo = [1, 2, 3, 4];

const sumReduceTwo = exReduceNumberTwo.reduce((acumulador, valorAtual) => {
  //console.log('acumulador', acumulador)    => imprime exemplificação
  //console.log('valor atual', valorAtual)
  return acumulador + valorAtual; // => aceita todas operações
}, 10);

console.log(sumReduceTwo);

console.log();
// NOTA: outra maneira de representar o exemplo acima (que é uma função relativamente "simples") seria o seguinte:
// indicada para funções menores (mais simples) !!!
const exReduceNumberThree = [1, 2, 3, 4];

const sumReduceThree = exReduceNumberThree.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  10
);

console.log(sumReduceThree);

console.log();
// OU igual a seguir ... todas tem a mesma resolução, apenas a construção é diferente, vai depender da necessidade.
// indicada para funções maiores (mais complexas) !!!
const exReduceNumberFour = [1, 2, 3, 4];

const myreduce = (acumulador, valorAtual) => acumulador + valorAtual;
const sumReduceFour = exReduceNumberFour.reduce(myreduce, 10);

console.log(sumReduceFour);

console.log();
// NOVO Ex:
// somar o valor de mercado de todas as empresas

const exReduceList = [
  { Name: "Sansung", MarketValue: 50, CEO: "Kim Hyun Suk", FoundedOn: 1938 },
  {
    Name: "Microsoft",
    MarketValue: 415,
    CEO: "Satya Nadella",
    FoundedOn: 1975,
  },
  { Name: "Intel", MarketValue: 117, CEO: "Brian Krzanich", FoundedOn: 1968 },
  {
    Name: "Facebook",
    MarketValue: 383,
    CEO: "Mark Zuckerberg",
    FoundedOn: 2004,
  },
  { Name: "Spotify", MarketValue: 30, CEO: "Daniel Ek", FoundedOn: 2006 },
  { Name: "Aplle", MarketValue: 845, CEO: "Tim Cook", FoundedOn: 1976 },
];

const allMarketValues = exReduceList.reduce(
  (acc, current) => acc + current.MarketValue,
  0
);

console.log(allMarketValues);

// NOTA:

// NOVO Ex:

// FUNCTIONS : => Return*/
