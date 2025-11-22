import CardIcon from "@/components/icons/CardIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import AppleIcon from "@/components/icons/AppleIcon";
import { Lock } from "lucide-react";

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

export const CREDIT_CARDS_LIST = [
  {
    id: 1,
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    type: "front" as const,
    gradient: "from-[#4C49ED] to-[#0A06F4]",
  },
  {
    id: 2,
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    type: "front" as const,
    gradient: "from-[#4C49ED] to-[#0A06F4]",
  },
  {
    id: 3,
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    type: "back" as const,
    gradient: "",
  },
] as const;

export const CARD_LIST = [
  {
    id: 1,
    type: "Secondary",
    bank: "DBL Bank",
    cardNumber: "**** **** 5600",
    nameOnCard: "William",
    status: "View Details",
  },
  {
    id: 2,
    type: "Secondary",
    bank: "BRC Bank",
    cardNumber: "**** **** 5600",
    nameOnCard: "William",
    status: "View Details",
  },
  {
    id: 3,
    type: "Secondary",
    bank: "ABM Bank",
    cardNumber: "**** **** 4300",
    nameOnCard: "Michel",
    status: "View Details",
  },
] as const;

export const CARD_SETTINGS = [
  {
    id: 1,
    icon: CardIcon,
    title: "Block Card",
    description: "Instantly block your card",
  },
  {
    id: 2,
    icon: Lock,
    title: "Change Pin Code",
    description: "Choose another pin code",
  },
  {
    id: 3,
    icon: GoogleIcon,
    title: "Add to Google Pay",
    description: "Withdraw without any card",
  },
  {
    id: 4,
    icon: AppleIcon,
    title: "Add to Apple Pay",
    description: "Withdraw without any card",
  },
  {
    id: 5,
    icon: AppleIcon,
    title: "Add to Apple Store",
    description: "Withdraw without any card",
  },
] as const;
