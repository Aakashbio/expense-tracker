
import ExpenseChart from "@/components/charts/pieChart";
import ExpenseForm from "@/components/expenseForm";
import ExpenseList from "@/components/expenseList";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ExpenseForm />
          <ExpenseList />
        </div>
        <div>
          <ExpenseChart />
        </div>
      </div>
    </div>
  );
}