export const INVESTMENT_HOLDINGS = [
  {
    id: 1,
    name: "Apple Inc.",
    symbol: "AAPL",
    shares: 50,
    value: 8750.0,
    change: 5.2,
    positive: true,
  },
  {
    id: 2,
    name: "Tesla Inc.",
    symbol: "TSLA",
    shares: 25,
    value: 6250.0,
    change: 8.4,
    positive: true,
  },
  {
    id: 3,
    name: "Amazon.com Inc.",
    symbol: "AMZN",
    shares: 30,
    value: 4500.0,
    change: -2.1,
    positive: false,
  },
  {
    id: 4,
    name: "Microsoft Corp.",
    symbol: "MSFT",
    shares: 40,
    value: 12000.0,
    change: 3.8,
    positive: true,
  },
] as const;

export const YEARLY_INVESTMENT = [
  { year: "2016", amount: 20000 },
  { year: "2017", amount: 23000 },
  { year: "2018", amount: 25000 },
  { year: "2019", amount: 30000 },
  { year: "2020", amount: 32000 },
  { year: "2021", amount: 40000 },
] as const;

export const YEARLY_REVENUE = [
  { year: "2016", revenue: 0 },
  { year: "2017", revenue: 15000 },
  { year: "2018", revenue: 8000 },
  { year: "2019", revenue: 22000 },
  { year: "2020", revenue: 18000 },
  { year: "2021", revenue: 40000 },
] as const;

export const MY_INVESTMENTS = [
  {
    id: 1,
    title: "Apple Store",
    subtitle: "E-commerce, Marketplace",
    investmentValue: "$54,000",
    returnValue: "+16%",
    isPositive: true,
  },
  {
    id: 2,
    title: "Samsung Mobile",
    subtitle: "E-commerce, Marketplace",
    investmentValue: "$25,300",
    returnValue: "-4%",
    isPositive: false,
  },
  {
    id: 3,
    title: "Tesla Motors",
    subtitle: "Electric Vehicles",
    investmentValue: "$8,200",
    returnValue: "+25%",
    isPositive: true,
  },
] as const;
