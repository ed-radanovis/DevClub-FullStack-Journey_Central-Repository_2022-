function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

const person = {
    name: 'Edmar',
    age: 41
}

//module.exports = person  //comando para exportação de módulo
//module.exports = sum     //comando para exportação de módulo

module.exports = { person, sum } // 'MODO CONTRAÍDO'