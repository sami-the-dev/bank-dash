import MyInvestmentCard from "./MyInvestmentCard";

interface Investment {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  investmentValue: string;
  returnValue: string;
  isPositive: boolean;
  iconClassName?: string;
  className?: string;
}

interface MyInvestmentProps {
  investments: Investment[];
}

export default function MyInvestment({ investments }: MyInvestmentProps) {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">My Investment</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {investments.map((investment) => (
          <MyInvestmentCard
            key={investment.id}
            icon={investment.icon}
            title={investment.title}
            subtitle={investment.subtitle}
            investmentValue={investment.investmentValue}
            returnValue={investment.returnValue}
            isPositive={investment.isPositive}
          />
        ))}
      </div>
    </div>
  );
}
