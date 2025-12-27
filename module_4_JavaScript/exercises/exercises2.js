// exerc.1 * [ok] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"
const exerciseOne = 10;
const enterANumber = 10;

if (exerciseOne > enterANumber) {
  console.log("o número é MENOR");
} else if (exerciseOne < enterANumber) {
  console.log("o número é MAIOR");
} else {
  console.log("o número é IGUAL");
}

console.log();
console.log("****** --- ******");
console.log();
// exerc.2 * [ok] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
const person = {
  name: "Edmar",
  profession: "Developer",
  nationality: "EUA",
};
if (person.nationality === "Brasil") {
  console.log("nacionalidade brasileira");
} else {
  console.log("nacionalidade estrangeira");
}

console.log();

const personOne = {
  name: "Edmar",
  profession: "Developer",
  nationality: "Brasil",
};
if (personOne.nationality === "Brasil") {
  console.log("nacionalidade brasileira");
} else {
  console.log("nacionalidade estrangeira");
}

console.log();
console.log("****** --- ******");
console.log();
// exerc.3 * [ok] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const prizeDrawn = Math.floor(Math.random() * (10 - 1) + 1);
const competitorNumber = Math.floor(Math.random() * (10 - 1) + 1);
console.log("número sorteado :", prizeDrawn);
console.log("seu número :", competitorNumber);

console.log();

if (prizeDrawn === competitorNumber) {
  console.log("*** Congratulation ... you WON ! ***");
} else {
  console.log("Sorry, try again");
}

console.log();
console.log("****** --- ******");
console.log();
//  exerc.4 * [ok] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
const firstReplaceZero = 300;
const secondReplaceZero = 225;
const thirdReplaceZero = 300;

const biggerNumber = Math.max(
  firstReplaceZero,
  secondReplaceZero,
  thirdReplaceZero
);
const smallestNumber = Math.min(
  firstReplaceZero,
  secondReplaceZero,
  thirdReplaceZero
);

console.log(`o Maior número é : ${biggerNumber}`);
console.log(`o Menor número é : ${smallestNumber}`);

console.log();
console.log("OU ... com número gerado automático");
console.log();

const luckyNumberOne = Math.floor(Math.random() * (1000 - 1) + 1);
const luckyNumberTwo = Math.floor(Math.random() * (1000 - 1) + 1);
const luckyNumberThree = Math.floor(Math.random() * (1000 - 1) + 1);

const biggerNumberEx = Math.max(
  luckyNumberOne,
  luckyNumberTwo,
  luckyNumberThree
);
const smallestNumberEx = Math.min(
  luckyNumberOne,
  luckyNumberTwo,
  luckyNumberThree
);

console.log(`o Maior número é : ${biggerNumberEx}`);
console.log(`o Menor número é : ${smallestNumberEx}`);

console.log();
console.log("****** --- ******");
console.log();
//  exerc.5 * [ok] Crie 5 objetos nesse formato  { nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
const personOneExFive = {
  name: "João",
  age: 18,
  sex: "M",
  profession: "Developer Web",
  nationality: "Brasil",
};
if (personOneExFive.age >= 18 && personOneExFive.nationality === "Brasil") {
  console.log(personOneExFive.name, "APROVADO para teste");
} else {
  console.log(personOneExFive.name, "NÃO atende os requisitos");
}

console.log();
const personTwoExFive = {
  name: "Joaquim",
  age: 20,
  sex: "M",
  profession: "Civil engineer",
  nationality: "Paraguai",
};
if (personTwoExFive.age >= 18 && personTwoExFive.nationality === "Brasil") {
  console.log(personTwoExFive.name, "APROVADO para teste");
} else {
  console.log(personTwoExFive.name, "NÃO atende os requisitos");
}

console.log();
const personThreeExFive = {
  name: "Antonio",
  age: 17,
  sex: "M",
  profession: "Developer",
  nationality: "Brasil",
};
if (personThreeExFive.age >= 18 && personThreeExFive.nationality === "Brasil") {
  console.log(personThreeExFive.name, "APROVADO para teste");
} else {
  console.log(personThreeExFive.name, "NÃO atende os requisitos");
}

console.log();
const personFourExFive = {
  name: "Maria",
  age: 25,
  sex: "F",
  profession: "Developer front-end",
  nationality: "Brasil",
};
if (personFourExFive.age >= 18 && personFourExFive.nationality === "Brasil") {
  console.log(personFourExFive.name, "APROVADO para teste");
} else {
  console.log(personFourExFive.name, "NÃO atende os requisitos");
}

console.log();
const personFiveExFive = {
  name: "Anna",
  age: 16,
  sex: "F",
  profession: "Studant",
  nationality: "Chile",
};
if (personFiveExFive.age >= 18 && personFiveExFive.nationality === "Brasil") {
  console.log(personFiveExFive.name, "APROVADO para teste");
} else {
  console.log(personFiveExFive.name, "NÃO atende os requisitos");
}

console.log();
console.log("****** --- ******");
console.log();
//  exerc.6 * [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10.
//Cada nota deve conter uma mensagem diferente.
const insertTheGrades = 0;
switch (insertTheGrades) {
  case 0:
    console.log("NÃO atendeu nehum critério de Aprovação");
    break;
  case 1:
    console.log("REPROVADO ... não atendeu o critério MíNIMO para Aprovação");
    break;
  case 2:
    console.log("REPROVADO ... não atendeu o critério MíNIMO para Aprovação");
    break;
  case 3:
    console.log("REPROVADO ... não atendeu o critério MíNIMO para Aprovação");
    break;
  case 4:
    console.log(
      "RECUPERAÇÃO ... atendeu  INSUFICIENTEMENTE o critério para Aprovação"
    );
    break;
  case 5:
    console.log("REFORÇO ... atendeu o MÍNIMO do critério para Aprovação");
    break;
  case 6:
    console.log("REFORÇO ... atendeu o MÍNIMO do critério para Aprovação");
    break;
  case 7:
    console.log("APROVADO ... atendeu TODOS os critérios para Aprovação");
    break;
  case 8:
    console.log("APROVADO ... atendeu TODOS os critérios para Aprovação");
    break;
  case 9:
    console.log(
      "APROVADO COM LOUVOR !!!!... atendeu PLENAMENTE todos os critérios para Aprovação"
    );
    break;
  case 10:
    console.log(
      "APROVADO COM LOUVOR !!!!... atendeu PLENAMENTE todos os critérios para Aprovação"
    );
    break;
  default:
    break;
}

console.log();
console.log("****** --- ******");
console.log();
//  exerc.7 * [ok] Faça um programa onde leia um numero e diga se ele é par ou impar.
const numberExSeven = Math.floor(Math.random() * (1000 - 1) + 1);
const resultExSeven = numberExSeven;

if (resultExSeven % 2 === 0) {
  console.log(resultExSeven, ":  O número é PAR");
} else {
  console.log(resultExSeven, ":  O número é IMPAR");
}

console.log();
console.log("****** --- ******");
console.log();
//  exerc.8 * [ok] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
const numberExEight = Math.floor(Math.random() * (100 - 1) + 1);
const resultExEight = numberExEight;

if (resultExEight % 2 === 0) {
  if (resultExEight % 5 === 0)
    console.log(resultExEight, ":  O número é PAR e DIVISIVEL POR 5");
  else console.log(resultExEight, ":  O número é PAR");
} else {
  for (let i = 2; i < resultExEight; i++)
    if (resultExEight % i === 0) {
      console.log(resultExEight, ":  O número é IMPAR");
      break;
    } else {
      if (i === resultExEight - 1)
        console.log(resultExEight, ":  O número é IMPAR e PRIMO");
    }
}

console.log();
console.log("****** --- ******");
console.log();
//  exerc.9 * [ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
//- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES.
//Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.
const numberOneExNine = Math.floor(Math.random() * (10 - 1) + 1);
const numberTwoExNine = Math.floor(Math.random() * (10 - 1) + 1);
const numberThreeExNine = Math.floor(Math.random() * (10 - 1) + 1);
const numberFourExNine = Math.floor(Math.random() * (10 - 1) + 1);

if (
  numberOneExNine % 2 === 0 &&
  numberTwoExNine % 2 === 0 &&
  numberThreeExNine % 2 === 0 &&
  numberFourExNine % 2 === 0
) {
  console.log(
    numberOneExNine,
    ",",
    numberTwoExNine,
    ",",
    numberThreeExNine,
    ",",
    numberFourExNine,
    ",",
    ":  Todos os números são PARES"
  );
} else if (
  numberOneExNine % 2 !== 0 &&
  numberTwoExNine % 2 !== 0 &&
  numberThreeExNine % 2 !== 0 &&
  numberFourExNine % 2 !== 0
) {
  console.log(
    numberOneExNine,
    ",",
    numberTwoExNine,
    ",",
    numberThreeExNine,
    ",",
    numberFourExNine,
    ",",
    ":  Todos os números são ÍMPARES"
  );
} else {
  console.log(
    numberOneExNine,
    ",",
    numberTwoExNine,
    ",",
    numberThreeExNine,
    ",",
    numberFourExNine,
    ",",
    ":  Os números estão MISTURADOS, existem Pares e Ímpares"
  );
}

console.log();
console.log();
console.log(
  "                                                  **** End of exercises! ****"
);
