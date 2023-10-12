
import { useState } from 'react';
import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  
  const [expense, setExpense] = useState(DUMMY_EXPENSE);

  const newExpenseDataHandler = (newExpense)=>{
    console.log("App.js", newExpense)
    setExpense(prevExpense=> { return [newExpense, ...prevExpense] })
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onNewExpense={newExpenseDataHandler}></NewExpense>
      {/* <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}></ExpenseItem>
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}></ExpenseItem> */}

      {/* <ExpenseItem expense={expenses[0]}></ExpenseItem> */}

      <Expense data={expense} />

    </div>
  );
}

export default App;



