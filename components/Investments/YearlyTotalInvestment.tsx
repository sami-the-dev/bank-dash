"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "@/constants";
import { YEARLY_INVESTMENT } from "@/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function YearlyTotalInvestment() {
  return (
    <div className="h-full flex flex-col">
      <CardHeader className="p-0 pb-5">
        <CardTitle>Yearly Total Investment</CardTitle>
      </CardHeader>
      <Card className="flex-1 p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={[...YEARLY_INVESTMENT]}>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.lightGray} />
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tick={{ fill: COLORS.primary4, fontSize: 13 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: COLORS.primary4, fontSize: 13 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: COLORS.white,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "8px",
              }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke={COLORS.yellow}
              strokeWidth={3}
              dot={{
                fill: COLORS.white,
                stroke: COLORS.yellow,
                strokeWidth: 2,
                r: 4,
              }}
              name="Investment"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
