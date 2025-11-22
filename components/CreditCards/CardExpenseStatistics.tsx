"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { EXPENSE_STATISTICS } from "@/data";
import { COLORS } from "@/constants";

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
        fill={COLORS.white}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-xs font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={x}
        y={y + 8}
        fill={COLORS.white}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[10px] font-medium"
      >
        {entry?.name}
      </text>
    </g>
  );
};

export default function CardExpenseStatistics() {
  return (
    <div className="col-span-1">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">
          Card Expense Statistics
        </h2>
      </div>
      <Card>
        <CardContent className="p-6">
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
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
