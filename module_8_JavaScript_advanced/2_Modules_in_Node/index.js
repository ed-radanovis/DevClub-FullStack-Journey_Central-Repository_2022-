// const person = require('./sum') //comando para importação de módulo  **1**
// const sum = require('./sum')    //comando para importação de módulo  **1**
// const multipleImports = require ('./sum') //comando para importação várias funções de 1 módulo módulo **2**
const { person, sum} = require ('./sum') //comando para importação várias funções de 1 módulo módulo 'MODO CONTRAÍDO' **3**

const multi = require('./multi')    //comando para importação de módulo  **1**

// console.log(person)      **1**
// console.log(sum(10,30))  **1**

// console.log(multipleImports.person)     **2**
// console.log(multipleImports.sum(5,30))  **2** 

console.log(person)     //**3**
console.log(sum(5,30))  //**3** 

console.log(multi(10,30))

