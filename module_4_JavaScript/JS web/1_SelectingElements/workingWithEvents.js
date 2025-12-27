
// Event lisening

const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus', () => {
    console.log('Deu um foco')
})

select.addEventListener( 'change' , () => {
    console.log(select.value)
})

button.addEventListener( 'click' , () => {
    alert('O botão foi acionado')
})
// outra maneira aplicar seria a seguinte ... cria-se a 
// variável com função e invoca ela conforme abaixo!  
// Esta forma costuma ser melhor quando a função é maior.

//      const nomeDaFunção = () => {
//           alert('O botão foi acionado')
//      }
//       button.addEventListener( 'click' , nomeDaFunção)