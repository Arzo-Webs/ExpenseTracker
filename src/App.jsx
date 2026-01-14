import { useState } from "react";
import "./App.css";
import Input from "./components/userInput";

export default function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Food", amount: 20, category: "Food" },
    { id: 2, title: "Transport", amount: 25, category: "Transport" },
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Food",
    "Transport",
    "Internet",
    "Shopping",
    "Groceries",
    "Bills",
    "Others",
  ];

  const totalCategory = {};
  for (const category of categories) {
    totalCategory[category] = 0;
  }

  for (const expense of expenses) {
    totalCategory[expense.category] += expense.amount;
  }

  function addItem() {
    if (!title || !amount || !category) {
    alert("Please fill all fields");
    return;
  }
  if (Number(amount) <= 0) {
    alert("Amount must be greater than 0");
    return;
  }

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      category: category,
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
  setAmount("");
  setCategory("");
  }

  const TotalPrice = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const ItemCount = expenses.length;

  return (
    <section>
      <div>
        <h1>Expense Tracker</h1>
      </div>

      <div className="totals">
        <p>Totals: ${TotalPrice}</p>
        <p>Items: {ItemCount}</p>
      </div>

      <div className="categoryList">
        <p>Category totals</p>
        <ul>
          {Object.keys(totalCategory).map((category) => (
            <li key={category}>
              {category}: {totalCategory[category]}
            </li>
          ))}
        </ul>
      </div>

      <div className="addExpense">
        <p>Add Expense</p>

        <Input
          label="Expense Name"
          value={title}
          onChange={setTitle}
          placeholder="e.g., Pizza"
        />

        <Input
          label="Expense Amount"
          value={amount}
          onChange={setAmount}
          placeholder="e.g., 15"
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
  <option value="">category</option>
  {categories.map(categoryName=><option key={categoryName} value={categoryName}>{categoryName}</option>)}
</select>

        <button onClick={addItem}>Add</button>
      </div>

      <div className="expenses">
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.title}-${expense.amount} ({expense.category})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
