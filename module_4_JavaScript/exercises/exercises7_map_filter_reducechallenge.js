// THIRD CHALLENGE - REDUCE

// 1º * Acrescer 10% no valor de mercado de cada uma das empresas
// 2º * Filtras apenas as empresas fundadas antes do ano 2.000
// 3º * Somar os valores do 1º exercício das empresas do 2º exercício
const listOne = [
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

const addTenPercent = (addPercentage) => {
  addPercentage.MarketValue =
    addPercentage.MarketValue + addPercentage.MarketValue / 10;
  //addPercentage.MarketValue = ((addPercentage.MarketValue * 1.10).toFixed(2))     OUTRA MANEIRA DE REPRESENTAR a linha acima
  return addPercentage;
};

//no caso do filter poderia ter criado uma variável aqui por ex:
//const oldCompanies = company => company.FoundOn <= 2000

//no caso do reduce poderia ter criado uma variável aqui por ex:
//constAllOldCompaniesMarketValue = (acc, current) => acc + current.MarketValue

const myBestCompanies = listOne
  .map(addTenPercent)
  .filter((company) => {
    if (company.FoundedOn <= 2000) return true;
  })
  .reduce((acc, current) => acc + current.MarketValue, 0);

// e se caso fossem utilizadas as outras maneiras a variável myBestCompanies ficaria assim:
// const myBestCompanies = listOne
//.map(addTenPercent)
//.filter(oldCompanies)
//.reduce(allOldCompaniesMarketValue, 0)   *** perceba que o valor inicial vem aqui.

console.log(
  "A soma dos valores das empresa mais antigas, acrescidos de 10% é:",
  "U$",
  myBestCompanies,
  "Bilhões"
);
