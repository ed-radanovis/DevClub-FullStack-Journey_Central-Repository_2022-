/* calculadora utilizando functions (arrow)

com operações de soma(+), subtrair(-), multiplicar(*) e dividir(/)*/

const calculator = (number1, number2, operation) => {
  let result;
  switch (operation) {
    case "+":
      result = number1 + number2;

      break;

    case "-":
      result = number1 - number2;

      break;

    case "*":
      result = number1 * number2;

      break;

    case "/":
      result = number1 / number2;

      break;

    default:
      result = "*** FALHA NA OPERAÇÃO ***";
      break;
  }

  return result;
};

console.log(calculator(40, 20, "+"));
console.log(calculator(30, 15, "-"));
console.log(calculator(25, 2, "*"));
console.log(calculator(30, 10, "/"));
console.log(calculator(30, 10, "X"));
