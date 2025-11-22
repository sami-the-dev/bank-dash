import React from "react";
import { Card } from "@/components/ui/card";

interface InvestmentStatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function InvestmentStatCard({
  icon,
  title,
  value,
}: InvestmentStatCardProps) {
  return (
    <Card className="flex items-center gap-4 p-6 max-h-[120px]">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-light-blue">
        {icon}
      </div>
      <div>
        <p className="text-base text-primary-4 mb-1">{title}</p>
        <p className="text-xl font-semibold text-dark-gray">{value}</p>
      </div>
    </Card>
  );
}
