// THIRD CHALLENGE - REDUCE

// somar o valor de mercado de todas as empresas

const list = [
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

const allMarketValues = list.reduce(
  (acc, current) => acc + current.MarketValue,
  0
);

console.log("U$", allMarketValues, "Bilhões");
