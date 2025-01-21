"use client";

import { useState } from "react";
import { useExpenseStore } from "../store/useExpenseStore";

const ExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [category, setCategory] = useState("");
  const addExpense = useExpenseStore((state) => state.addExpense);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !category) return;

    addExpense({
      id: crypto.randomUUID(),
      description,
      amount: Number(amount),
      category,
      date: new Date().toISOString(),
    });

    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:ring focus:ring-blue-200"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border border-gray-300 p-3 rounded focus:ring focus:ring-blue-200"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:ring focus:ring-blue-200"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;