// ****  EXERCÍCIOS SOBRE FUNÇÕES ****

// exerc.1 * [ok] Escreva um programa onde, você chame uma função enviando um número, a função deve imprimir na tela os número de 1 até o número
// que você enviou
console.log("Exerc.1:");
console.log();

const funcexercone = (paramfuncone) => {
  for (i = 1; i <= paramfuncone; i++) {
    console.log("Imprimir os nºs de:", i);
  }
};

const insertnumberexercone = 5;

funcexercone(insertnumberexercone);

console.log();
// exerc.2 * [ok] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada
// de 1 a 10 do valor lido.
console.log("Exerc.2:");
console.log();

const funcexerctwo = (multiplicationtable) => {
  if (multiplicationtable > 10 || multiplicationtable < 1) {
    console.log("Aceitos nºs apenas de 1 a 10");
    return;
  }
  for (var i = 1; i <= 10; i++)
    console.log(`${i} x ${multiplicationtable} = ${multiplicationtable * i}`);
};

funcexerctwo(2);

console.log();
// exerc.3 * [ok] Escreva um programa onde, você chame uma função, e ela diga a hora exata!
console.log("Exerc.3:");
console.log();

console.log(new Date().toLocaleTimeString("pt-BR"));

console.log();
// exerc.4 * [ok] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!
console.log("Exerc.4:");
console.log();

console.log(new Date().getFullYear("pt-BR"));

console.log();
// exerc.5 * [ok] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior
console.log("Exerc.5:");
console.log();

const funcexercfive = (numberexercfiveone, numberexercfivetwo) => {
  if (numberexercfiveone > numberexercfivetwo)
    console.log("O PRIMEIRO número é o Maior");
  else console.log("O SEGUNDO número é o Maior");
};

funcexercfive(10, 20);

console.log();
// exerc.6 * [ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
/* A prefeitura deseja saber:
     - média do salário da população;
     - média do número de filhos;
     - maior salário;
     - O final da leitura de dados se dará com a entrada de um salário negativo.
     - Faça isso usando uma função!*/
console.log("Exerc.6:");
console.log();

const arrayExercSix = [
  {
    name: "John",
    sons: 2,
    monthlyincome: 3000,
  },
  {
    name: "Ryan",
    sons: 4,
    monthlyincome: 2000,
  },
  {
    name: "Richard",
    sons: 2,
    monthlyincome: 4000,
  },
  {
    name: "Thomas",
    sons: 4,
    monthlyincome: -1,
  },
];

function funcExercSix(peopleinformation) {
  let avaregeMonthlyIncome = 0;
  let avaregeSons = 0;
  let highestMonthlyIncome = 0;

  for (let i = 0; i < peopleinformation.length; i++) {
    const monthlyincome = peopleinformation[i].monthlyincome;
    const sons = peopleinformation[i].sons;

    if (monthlyincome > highestMonthlyIncome)
      highestMonthlyIncome = monthlyincome;

    if (monthlyincome < 0) {
      console.log(
        `Média de salário R$${(avaregeMonthlyIncome / i).toFixed(0)}`
      );
      console.log(`Média de filhos ${(avaregeSons / i).toFixed(0)}`);
      console.log(`Maior salário R$${highestMonthlyIncome}`);
      break;
    } else {
      avaregeMonthlyIncome = avaregeMonthlyIncome + monthlyincome; //  => NOTA é uma forma mais clara de expressar ... avaregeMonthlyIncome += monthlyincome
      avaregeSons += sons;
    }
  }
}

funcExercSix(arrayExercSix);

console.log();
console.log("******** outra resolução exerc. 6 ********");
console.log();

const arrayExercSix_Two = [
  {
    name: "João",
    sons: 3.0,
    monthlyincome: 2500,
  },
  {
    name: "Antonio",
    sons: 4.0,
    monthlyincome: 3500,
  },
  {
    name: "Ricardo",
    sons: 2.0,
    monthlyincome: 5000,
  },
  {
    name: "Benedito",
    sons: 4.0,
    monthlyincome: -1,
  },
];

function funcExercSix_Two(peopleinformationtwo) {
  let i = 0;
  let avaregeMonthlyIncome_Two = 0;
  let avaregeSons_Two = 0;
  let highestMonthlyIncome_two = 0;

  while (peopleinformationtwo[i].monthlyincome > 0) {
    avaregeMonthlyIncome_Two =
      avaregeMonthlyIncome_Two + peopleinformationtwo[i].monthlyincome; //  => NOTA é uma forma mais clara de expressar ... avaregeMonthlyIncome_Two += peopleinformationtwo[i].monthincome
    avaregeSons_Two = avaregeSons_Two + peopleinformationtwo[i].sons;
    peopleinformationtwo[i].monthlyincome > highestMonthlyIncome_two
      ? (highestMonthlyIncome_two = peopleinformationtwo[i].monthlyincome)
      : (highestMonthlyIncome_two = highestMonthlyIncome_two);
    i++;
  }

  console.log(`Média de salário R$${avaregeMonthlyIncome_Two / i}`); // => nesta resolução foi omitido o parâmetro de arredondamento
  console.log(`Média de filhos ${avaregeSons_Two / i}`);
  console.log(`Maior salário R$${highestMonthlyIncome_two}`);
}

funcExercSix_Two(arrayExercSix_Two);

console.log();
// exerc.7 * [ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.

//- Você deve enviar como argumentos da função
//- Valor inicial investido
//- Valor atual do investimento
//- Tempo em meses, que o valor está investido
//- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%.
// *** Siga a formula desse vídeo para te auxiliar com o cálculo.
// *** Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
console.log("Exerc.7:");
console.log();

function funcExercSeven(initialValue, currentValue, time_N) {
  const rate = (currentValue - initialValue) / (initialValue * time_N);
  console.log((rate * 100).toFixed(2) + "%"); // => o nº inserido em .toFixed() define a qt de casas decimais a serem consideradas,
} //    neste exemplo são duas.

funcExercSeven(2000, 2600, 12);

console.log();
// exerc.8 * [ ] Escreva um programa onde, você cria uma função geradora de desconto.

/* - A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não,
  um booleando que diz se o cliente vai pagar a vista ou não)

=> Os descontos funcionam da seguinte forma: 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto     

    - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 

    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

    - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto     

    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

    - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 

    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
    - A função deve imprimir na tela: 

    - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto
      e a porcentagem de desconto que ele recebeu.       

    - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto.
      Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.*/
console.log("Exerc.8:");
console.log();

function funcExercEight(name, valueExercEight, firstSale, cashPayment) {
  if (firstSale === "Sim" && cashPayment === "Sim") {
    if (valueExercEight >= 1000) {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 30 % *** e pagará apenas R$ ${(
          valueExercEight * 0.7
        ).toFixed(2)}`
      );
      return;
    } else if (valueExercEight < 500) {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 20 % *** e pagará apenas R$ ${(
          valueExercEight * 0.8
        ).toFixed(2)}`
      );
      return;
    } else {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 25 % *** e pagará apenas R$ ${(
          valueExercEight * 0.75
        ).toFixed(2)}`
      );
      return;
    }
  }

  if (firstSale === "Sim" && cashPayment === "Não") {
    if (valueExercEight >= 1000) {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 20 % *** e pagará apenas R$ ${(
          valueExercEight * 0.8
        ).toFixed(2)}`
      );
      return;
    } else if (valueExercEight < 500) {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 10 % *** e pagará apenas R$ ${(
          valueExercEight * 0.9
        ).toFixed(2)}`
      );
      return;
    } else {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 15 % *** e pagará apenas R$ ${(
          valueExercEight * 0.85
        ).toFixed(2)}`
      );
      return;
    }
  }

  if (firstSale === "Não" && cashPayment === "Sim") {
    if (valueExercEight >= 1000) {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 20 % *** e pagará apenas R$ ${(
          valueExercEight * 0.8
        ).toFixed(2)}`
      );
      return;
    } else if (valueExercEight < 500) {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 10 % *** e pagará apenas R$ ${(
          valueExercEight * 0.9
        ).toFixed(2)}`
      );
      return;
    } else {
      console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
      console.log(
        `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
      );
      console.log(
        `Por isso obteve um desconto de *** 15 % *** e pagará apenas R$ ${(
          valueExercEight * 0.85
        ).toFixed(2)}`
      );
      return;
    }
  } else firstSale === "Não" && cashPayment === "Não)";
  if (valueExercEight >= 1000) {
    console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
    console.log(
      `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
    );
    console.log(
      `Por isso obteve um desconto de *** 10 % *** e pagará apenas R$ ${(
        valueExercEight * 0.9
      ).toFixed(2)}`
    );
    return;
  } else if (valueExercEight < 500) {
    console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
    console.log(
      `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
    );
    console.log(
      `Por isso obteve um desconto de *** ${(
        Math.random() * (20 - 10) +
        10
      ).toFixed()} % *** para sua 'PRÓXIMA' compra !!!`
    );
    return;
  } else {
    console.log(`Sr(a) ${name}, agradecemos pela sua preferência !!!`);
    console.log(
      `O valor de sua compra foi de R$ ${valueExercEight.toFixed(2)}`
    );
    console.log(
      `Por isso obteve um desconto de *** 5 % *** e pagará apenas R$ ${(
        valueExercEight * 0.95
      ).toFixed(2)}`
    );
    return;
  }
}

console.log("********  Obtendo todas as possibilidades de resolução  ********");
console.log();

funcExercEight("João", 1000, "Sim", "Sim");
console.log();
funcExercEight("José", 800, "Sim", "Sim");
console.log();
funcExercEight("Brito", 499, "Sim", "Sim");
console.log();

funcExercEight("João", 1000, "Sim", "Não");
console.log();
funcExercEight("José", 800, "Sim", "Não");
console.log();
funcExercEight("Brito", 499, "Sim", "Não");
console.log();

funcExercEight("João", 1000, "Não", "Sim");
console.log();
funcExercEight("José", 800, "Não", "Sim");
console.log();
funcExercEight("Brito", 499, "Não", "Sim");
console.log();

funcExercEight("João", 1000, "Não", "Não");
console.log();
funcExercEight("José", 800, "Não", "Não");
console.log();
funcExercEight("Brito", 499, "Não", "Não");
console.log();
