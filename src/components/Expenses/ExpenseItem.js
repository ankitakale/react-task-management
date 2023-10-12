import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import "./ExpenseItem.css";
import React, { useState } from "react";
function ExpenseItem(props) {

//  const [title, setTitle] = useState(props.title);
 
  // const clickHandler = ()=>{
  //   setTitle("Updated");
  //   console.log(title);
  // }

  // console.log("Component is re-evaluated! ")


         

  return (
    // <div className="expense-item">
    <li>
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        {/* <h2>{title}</h2> */}
        <div className="expense-item__price"> {props.amount} </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
      </Card>
      </li>
    // </div>
  );
}
export default ExpenseItem;

// props object detructuring
// <div className="expense-item">
//   <div> {date.toDateString()} </div>
//   <div className="expense-item__description">
//     <h2> {title} </h2>
//     <div className="expense-item__price"> {amount} </div>
//   </div>
// </div>

// passing entire expense object to props
// <div className="expense-item">
//   <div> {props.expense.date.toDateString()} </div>
//   <div className="expense-item__description">
//     <h2> {props.expense.title} </h2>
//     <div className="expense-item__price"> {props.expense.amount} </div>
//   </div>
// </div>

//   const expenseDate = new Date(2023, 8, 30);
//   const expenseTitle = "Car Insuarance";
//   const expenseAmount = 294.98;
