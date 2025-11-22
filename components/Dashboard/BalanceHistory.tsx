"use client";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { BALANCE_HISTORY } from "@/data";

export default function BalanceHistory() {
  return (
    <div className="lg:col-span-2 h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">
          Balance History
        </h2>
      </div>
      <div className="rounded-[25px] bg-white p-6 shadow-sm border border-border flex-1">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={[...BALANCE_HISTORY]}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1814F3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#1814F3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F5F7FA" />
            <XAxis
              dataKey="month"
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
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#1814F3"
              strokeWidth={3}
              fill="url(#colorBalance)"
              name="Balance"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
