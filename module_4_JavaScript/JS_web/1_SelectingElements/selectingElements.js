// MODELOS DE SELEÇÃO

// 1º get Element by Id
//const element =  document.getElementById("main-text")
//console.log(element)

// 2º get Element by class name
//const element =  document.getElementsByClassName("paragraph")
//console.log(element)

// 3º get Element by tag name
//const element =  document.getElementsByTagName ('h1')
//console.log(element)

// 4º query selector   => pode dar a ele um elemento, uma classe, uma tag, etc. ele retorna o primeiro que encontrar
//const element =  document.querySelector ('p')
//console.log(element)

// outro exemplo
//const element =  document.querySelector ('.paragraph') // ou ("#main-text")
//console.log(element)

// 5º query selectorAll   => Seleciona TODOS os elementos  *** possível fazer irterações com o FOR EACH por exemplo
// const element =  document.querySelectorAll('p')

// element.forEach(element => {

// console.log(element)
// })

// 6º - getElementByName()   // Trás elementos com nome selecionado (NodeList)
// const element = document.getElementsByName ('my_input')
// console.log(element)

// Usando query selector para acessar um elemento específico

//const element =   document.querySelector('input')
//console.log(element.attributes)
// OU por exemplo
//console.log(element.value)

// Manipular atributos e estilos no HTML c/ JS

//const element = document.querySelector('h1')
//element.innerText = "eu manipulando valores do HTML com JS"
// OU como abaixo
//element.textContent = "agora usando text content"
// OU como abaixo
//element.innerHTML = "agora usando inner HTML"

// OBS: c/ innerText e textContent só altera valores já com innerHTML permite adicionar HTML
//element.innerHTML = "acrescentando code HTML <p> adicionando parágrafo </p>"

// manipular EVENTOS
// primeiro botão
// const element = document.querySelector('button')
//  const myFunction = () => {
//      alert('Fui pressionado')
//  }

//  OU

// segundo botão
// const element = document.querySelector('button')
// element.onclick = () => {
//     alert('Fui pressionado também')
// }

// propriedades dos EVENTOS

// exemplo de onkeyup  (quando qq tecla é acionada retorna)
// const element = document.querySelector('input')
// element.onkeyup = () => {
//     console.log('Fui pressionado também')
// }

// novo exemplo de onkeyup
// const element = document.querySelector('input')
// element.onkeyup = (event) => {
//     console.log(event)
// }

// novo exemplo de onkeyup
// const element = document.querySelector('input')
// element.onkeyup = (event) => {
//     console.log(event.key)
// }

// novo exemplo de onkeyup
const element = document.querySelector("input");
element.onkeyup = (event) => {
  console.log(event.target.value);
};
