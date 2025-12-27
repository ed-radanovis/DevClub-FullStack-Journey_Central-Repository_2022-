// exerc.1 * [ok] Faça um programa que SOME 2 números
const exercise1 = 42;
const exercise1_2 = 37;
const result1 = exercise1 + exercise1_2;
console.log(result1);

// exerc.2 * [ok] Faça um programa que multiplique 2 números e o resultado adicione 10
const exercise2 = 40;
const exercise2_1 = 20;
const result2 = exercise2 * exercise2_1 + 10;
console.log(result2);

// exerc.3 * [ok] Faça um programa que encontre a raiz quadrada de um número, multiplique
//o resultado por 10 e divida por 33

const exercise3 = Math.sqrt(25);
const result3 = (exercise3 * 10) / 33;
console.log(result3);

// exerc.4 * [ok] Faça um programa que inicie com dois nomes, e o programa imprima na tela o
// seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)
const exercise4 = "Jéssica";
const exercise4_1 = "Derek";
const result4 = `Olá, meu nome é ${exercise4}
e meu partner do CodeClub é o ${exercise4_1}`;
console.log(result4);

// exerc.5 * [ok] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// Ex: João e João, imprime true. João e Maria, imprime false.
const exercise5 = "Jessica";
const exercise5_1 = "Mellanie";
const compare5 = exercise5 == exercise5_1;
console.log(compare5);

// exerc.6 * [ok] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
// Ex: João e João, imprime false. João e Maria, imprime true.
const exercise6 = "Jessica";
const exercise6_1 = "Mellanie";
const compare6 = exercise6 != exercise6_1;
console.log(compare6);

// exerc.7 * [ok] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João,
// imprime true. João e Maria, imprime false.
const array7 = ["Almir", "Anézia"];
const compare7 = [0] === [1];
console.log(compare7);

// exerc.8 * [ok] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
// Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"].
//João e João, imprime false. João e Maria, imprime true.
const array8 = ["Almir", "Anézia"];
const compare8 = [0] !== [1];
console.log(compare8);

// exerc.9 * [ok] Crie 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece.
// Mínimo 5 dados por pessoa.
const person9_1 = {
  name: "Edmar Radanovis",
  age: 41,
  height: 1.8,
  sex: "Male",
  address: "R Boa Vista 570 MOCOCA",
};
const person9_2 = {
  name: "Jessica F.B. Radanovis",
  age: 37,
  height: 1.67,
  sex: "Female",
  address: "R Boa Vista 570 MOCOCA",
};
const person9_3 = {
  name: "Almir Bittencourt Barros",
  age: 65,
  height: 1.76,
  sex: "Male",
  address: "R Boa Vista 446 MOCOCA",
};
const person9_4 = {
  name: "Anete Fiorotti",
  age: 69,
  height: 1.67,
  sex: "Female",
  address: "R Boa Vista 446 MOCOCA",
};
const person9_5 = {
  name: "Mellanie F.B. Radanovis",
  age: 11,
  height: 1.4,
  sex: "Female",
  address: "R Boa Vista 570 MOCOCA",
};
console.log(person9_1, person9_2, person9_3, person9_4, person9_5);

// exerc.10 * [ok] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"},
// object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const person10_1 = {
  name: "Edmar Radanovis",
};
const person10_2 = {
  name: "Jessica F.B. Radanovis",
};
console.log(person10_1 == person10_2);
console.log(person10_1 == person10_1);
console.log(person10_2 == person10_2);

//ou
const person10_3 = {
  name: "Edmar Radanovis",
  age: 41,
  height: 1.8,
  sex: "Male",
  address: "R Boa Vista 570 MOCOCA",
};
const person10_4 = {
  name: "Jessica F.B. Radanovis",
  age: 37,
  height: 1.62,
  sex: "Female",
  address: "R Boa Vista 570 MOCOCA",
};
console.log(person10_3.name === person10_4.name);

// exerc.10 * parte 2 [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}.
// João e João, imprime true. João e Maria, imprime false.
const name1 = "João",
  name2 = "Maria";
const result10 = name1 !== name2;
const result10_1 = name1 === name2;
console.log(result10);
console.log(result10_1);

// exerc.11 * [ok] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.
console.log(Math.random() * (100 - 1) + 1);
//ou (com arredondamento)
console.log(Math.floor(Math.random() * (100 - 1) + 1));

// exerc.12 * [ ] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão.
//Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.
const number12 = 7;
const number12_1 = 3;
const result12 = number12 % number12_1;
console.log(result12);

const number12_3 = 25;
const number12_4 = 5;
const result12_6 = number12_3 % number12_4;
console.log(result12_6);

// exerc.13 * [ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo.
// Ex: 2 e 5. Imprime: false.
const number13 = 2;
const number13_1 = 5;
const result13 = number13 > number13_1;
console.log(result13);

// exerc.14 * [ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo.
// Ex: 2 e 5. Imprime: true.
const number14 = 2;
const number14_1 = 5;
const result14 = number14 < number14_1;
console.log(result14);

// exerc.15 * [ ] Crie um programa que mostra o tamanho do Array. Ex: const array = [0, 1] imprime: 2.
// const array = ["banana", "Maça", "laranja"] imprime: 3
const array15 = [0, 1];
console.log(array15.length);

const array15_1 = ["banana", "Maça", "laranja"];
console.log(array15_1.length);

// end of cod
const endCode = `End of code!!!`;
console.log(endCode);
