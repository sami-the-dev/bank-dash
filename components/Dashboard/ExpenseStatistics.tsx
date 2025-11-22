"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { EXPENSE_STATISTICS } from "@/data";

const renderCustomLabel = (props: {
  cx?: number;
  cy?: number;
  midAngle?: number;
  outerRadius?: number;
  innerRadius?: number;
  percent?: number;
  index?: number;
}) => {
  const {
    cx = 0,
    cy = 0,
    midAngle = 0,
    outerRadius = 0,
    innerRadius = 0,
    percent = 0,
    index = 0,
  } = props;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const entry = EXPENSE_STATISTICS[index];

  return (
    <g>
      <text
        x={x}
        y={y - 8}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-xs font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={x}
        y={y + 8}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[10px] font-medium"
      >
        {entry?.name}
      </text>
    </g>
  );
};

export default function ExpenseStatistics() {
  return (
    <div className="lg:col-span-1 h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">
          Expense Statistics
        </h2>
      </div>
      <div className="rounded-[25px] bg-white p-6 shadow-sm border border-border flex-1">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[...EXPENSE_STATISTICS]}
              cx="50%"
              cy="50%"
              outerRadius={120}
              paddingAngle={8}
              dataKey="value"
              label={renderCustomLabel}
              labelLine={false}
            >
              {EXPENSE_STATISTICS.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E6EFF5",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
