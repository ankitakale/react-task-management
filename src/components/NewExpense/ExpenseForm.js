import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [title,setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title:'',
  //   amount: '',
  //   date: ''
  // })



  const titleChangeHandler = (event)=>{
    setTitle(event.target.value);
    console.log(event);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, title: event.target.value}
    // })
  } 
  const amountChangeHandler = (event)=>{
    setAmount(event.target.value);
    console.log(amount)
  }
  const dateChangeHandler = (event)=>{
    setDate(event.target.value);
    console.log(date)
  }

  // const inputChangeHandler = (identifier, value)=>{
  //   if(identifier === "title"){
  //     setTitle(value);
  //   } else if(identifier === "amount"){
  //     setAmount(value);
  //   } else if(identifier === "date"){
  //     setDate(value);
  //   }
  // }

  const submitEventHandler = (event)=>{
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
    props.onCancelClick(true); 
  }
  
  const cancelClickHandler = (event)=>{
    props.onCancelClick(true);    
  }

  return (
    <form onSubmit={submitEventHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="1" max="100" value={amount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} min="2020-01-01" max="2025-01-01" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={cancelClickHandler}>Cancel</button>

        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
