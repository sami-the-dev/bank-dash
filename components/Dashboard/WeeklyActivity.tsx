"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { WEEKLY_ACTIVITY } from "@/data";
import { COLORS } from "@/constants";

export default function WeeklyActivity() {
  return (
    <div className="lg:col-span-1 h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">
          Weekly Activity
        </h2>
      </div>
      <div className="rounded-[25px] bg-white p-6 shadow-sm border border-border flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[...WEEKLY_ACTIVITY]} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F5F7FA" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718EBF", fontSize: 13 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718EBF", fontSize: 13 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E6EFF5",
                borderRadius: "8px",
              }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ paddingBottom: "20px" }}
            />
            <Bar
              dataKey="deposit"
              fill={COLORS.primaryBlue}
              radius={[10, 10, 0, 0]}
              barSize={15}
              name="Deposit"
            />
            <Bar
              dataKey="withdraw"
              fill={COLORS.teal}
              radius={[10, 10, 0, 0]}
              barSize={15}
              name="Withdraw"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
