import marcel from "../public/marcel.jpg";
import julia from "../public/julia-volk.jpg";
import emanuel from "../public/emauel.jpg";

export const CARDS_DATA = [
  {
    id: 1,
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    type: "front",
    gradient: "from-[#4C49ED] to-[#0A06F4]",
  },
  {
    id: 2,
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    type: "back",
    gradient: "",
  },
] as const;

export const RECENT_TRANSACTIONS = [
  {
    id: 1,
    icon: "jemi",
    title: "Deposit from my Account",
    date: "28 January 2021",
    amount: -850,
    category: "deposit",
  },
  {
    id: 2,
    icon: "paypal",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    category: "deposit",
  },
  {
    id: 3,
    icon: "deposit",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    category: "transfer",
  },
] as const;

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

export const CREDIT_CARD_TRANSACTIONS = [
  {
    id: 1,
    merchant: "Amazon",
    date: "Nov 18, 2025",
    amount: -156.0,
    card: "••3456",
  },
  {
    id: 2,
    merchant: "Starbucks",
    date: "Nov 17, 2025",
    amount: -12.5,
    card: "••3456",
  },
  {
    id: 3,
    merchant: "Apple Store",
    date: "Nov 16, 2025",
    amount: -899.0,
    card: "••7890",
  },
  {
    id: 4,
    merchant: "Netflix",
    date: "Nov 15, 2025",
    amount: -15.99,
    card: "••3456",
  },
] as const;

export const CREDIT_CARDS = [
  {
    id: 1,
    balance: 5756,
    cardHolder: "John Doe",
    validThru: "12/26",
    cardNumber: "•••• •••• •••• 3456",
    type: "gradient",
    gradient: "from-primary-2 to-blue-900",
  },
  {
    id: 2,
    balance: 2345,
    cardHolder: "John Doe",
    validThru: "08/27",
    cardNumber: "•••• •••• •••• 7890",
    type: "border",
    gradient: "",
  },
] as const;

export const WEEKLY_ACTIVITY = [
  { day: "Sat", deposit: 480, withdraw: 320 },
  { day: "Sun", deposit: 350, withdraw: 280 },
  { day: "Mon", deposit: 420, withdraw: 380 },
  { day: "Tue", deposit: 390, withdraw: 340 },
  { day: "Wed", deposit: 470, withdraw: 400 },
  { day: "Thu", deposit: 410, withdraw: 320 },
  { day: "Fri", deposit: 450, withdraw: 360 },
] as const;

export const EXPENSE_STATISTICS = [
  { name: "Entertainment", value: 30, color: "#343C6A" },
  { name: "Bill Expense", value: 15, color: "#FC7900" },
  { name: "Investment", value: 20, color: "#232323" },
  { name: "Others", value: 35, color: "#396AFF" },
] as const;

export const QUICK_TRANSFER_CONTACTS = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    avatar: julia,
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    avatar: marcel,
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    avatar: emanuel,
  },
] as const;

export const BALANCE_HISTORY = [
  { month: "Jul", balance: 220 },
  { month: "Aug", balance: 350 },
  { month: "Sep", balance: 520 },
  { month: "Oct", balance: 380 },
  { month: "Nov", balance: 470 },
  { month: "Dec", balance: 620 },
  { month: "Jan", balance: 750 },
] as const;
