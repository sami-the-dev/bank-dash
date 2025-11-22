import CreditCardList from "@/components/CreditCards/CreditCardList";
import CardExpenseStatistics from "@/components/CreditCards/CardExpenseStatistics";
import CardList from "@/components/CreditCards/CardList";
import AddNewCard from "@/components/CreditCards/AddNewCard";
import CardSetting from "@/components/CreditCards/CardSetting";

export default function CreditCardsPage() {
  return (
    <div>
      <CreditCardList />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
        <CardExpenseStatistics />
        <CardList />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
        <AddNewCard />
        <CardSetting />
      </div>
    </div>
  );
}
