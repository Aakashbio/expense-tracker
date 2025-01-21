"use client";

import { useExpenseStore } from "../store/useExpenseStore";

const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpenseStore();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet.</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Description</th>
              <th className="p-3">Category</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="hover:bg-gray-50 transition"
              >
                <td className="p-3">{expense.description}</td>
                <td className="p-3 text-gray-500">{expense.category}</td>
                <td className="p-3 text-green-500 font-semibold">
                  ${expense.amount}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
