function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

function multi(firstNumber, secondNumber){
    return firstNumber * secondNumber
}

//module.exports = { multi, sum }
this.sum = sum
this.multi = multi  // exemplo do THIS em escopo global