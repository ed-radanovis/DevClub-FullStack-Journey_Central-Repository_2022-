// SECOND CHALLENGE - FILTER

//exercise one  => apenas os nºs pares e divisíveis por 5

// 1ª maneira de resolver
const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];
const newListOne = list.filter((number) => {
  if (number % 2 !== 0) return false;
  if (number % 5 !== 0) return false;

  return true;
});

console.log(newListOne);

console.log();
// 2ª maneira de resolver
const listTwo = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];
const newListTwo = listTwo.filter((number) => {
  if (number % 2 === 0 && number % 5 === 0) return true;
  else return false;
});

console.log(newListTwo);

console.log();
// 3ª maneira de resolver
const listThree = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];
const newListThree = listThree.filter((number) => {
  if (number % 2 !== 0 || number % 5 !== 0) return false;
  else return true;
});

console.log(newListThree);

console.log();
//exercise two  => apenas as empresas fundadas após 1975 e com valor > que U$ 200.000.000,00
const companies = [
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

const newCompanies = companies.filter((company) => {
  if (company.FoundedOn <= 1975) return false;
  if (company.MarketValue <= 200) return false;

  return true;
});

console.log(newCompanies);
