import { COLORS } from "@/constants";

export const EXPENSE_STATISTICS = [
  { name: "Entertainment", value: 30, color: COLORS.primary },
  { name: "Bill Expense", value: 15, color: COLORS.orange },
  { name: "Investment", value: 20, color: COLORS.foreground },
  { name: "Others", value: 35, color: COLORS.blue },
] as const;
