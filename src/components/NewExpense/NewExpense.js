import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense = (props)=>{
    // const [expenseFormContent, setExpenseFormContent] = useState(null);
    const [newExpenseContent, setNewExpenseContent] = useState(true);
   
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        console.log("NewExpense.js",enteredExpenseData)
        props.onNewExpense(enteredExpenseData)
    }

    const clickHandler = ()=>{
        setNewExpenseContent(false)

        // setNewExpenseContent()
    }
    const cancelClickHandler = (clickStatus)=>{
        if(clickStatus) setNewExpenseContent(newButtonContent)
    }
    const expenseFormContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={cancelClickHandler}/>
    const newButtonContent = <button className="new-expense" onClick={clickHandler}>Add New Expense</button>
    
 return (
   
    <div className="new-expense">
        {newExpenseContent ? newButtonContent : expenseFormContent}
        
    </div>
 )
}
export default NewExpense;