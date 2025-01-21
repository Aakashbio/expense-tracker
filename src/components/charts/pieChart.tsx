"use client";

import { useExpenseStore } from "@/store/useExpenseStore";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ExpenseChart = () => {
  const expenses = useExpenseStore((state) => state.expenses);

  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    series: Object.values(categoryData),
    labels: Object.keys(categoryData),
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Expense Breakdown</h2>
      {chartData.series.length === 0 ? (
        <p className="text-gray-500">No data to display.</p>
      ) : (
        <Chart
          options={{
            labels: chartData.labels,
            chart: {
              animations: { enabled: true },
            },
          }}
          series={chartData.series}
          type="donut"
          height={300}
        />
      )}
    </div>
  );
};

export default ExpenseChart;