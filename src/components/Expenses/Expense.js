import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList"
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";
function Expense(props) {

    const [year, setYear] = useState('2020');
    let filterInfoText = "2019 2021 2022"

    if(year == 2019){
        filterInfoText = "2020 2021 2022"
    } else if(year == 2021){
        filterInfoText = "2019 2020 2022"
    } else if(year == 2022){
        filterInfoText = "2019 2020 2021"
    } 

    const yearChangeHandler = (yearData)=>{
        setYear(yearData)
        console.log("Year ==> ",yearData)
    }

    const newData = props.data.filter((item) => { return item.date.getFullYear() == year})
   
    
  
  return (
    <div>
        
      <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={yearChangeHandler}></ExpensesFilter>
      <p> Years not selected {filterInfoText}</p>
      <ExpenseChart expenses={newData}/>
      <ExpensesList data={newData} year={year} />
      
        {/* <ExpenseItem
          date={props.data[0].date}
          title={props.data[0].title}
          amount={props.data[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={props.data[1].date}
          title={props.data[1].title}
          amount={props.data[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={props.data[2].date}
          title={props.data[2].title}
          amount={props.data[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={props.data[3].date}
          title={props.data[3].title}
          amount={props.data[3].amount}
        ></ExpenseItem> */}
      </Card>
      
    </div>
  );
}
export default Expense;
