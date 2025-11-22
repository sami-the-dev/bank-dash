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
import { YEARLY_REVENUE } from "@/data";

export default function MonthlyRevenue() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">
          Monthly Revenue
        </h2>
      </div>
      <div className="rounded-[25px] bg-white p-6 shadow-sm border border-border flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={[...YEARLY_REVENUE]}>
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
              dataKey="revenue"
              stroke={COLORS.teal}
              strokeWidth={3}
              dot={{ fill: COLORS.teal, r: 4 }}
              name="Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
