import ExpensesList from './ExpensesList';
import React, {useState} from 'react'
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseFilter.css';
import ExpensesChart from './ExpensesChart';
const Expenses=(props)=>{
    const[filteredYear,setFilteredYear]=useState('2020')
    const newFilterHandler=(selectedYear)=>{
        //console.log("Expenses.js")
        setFilteredYear(selectedYear)
    }
    const filteredExpenses=props.items
    .filter((expense)=>
     expense.date.getFullYear().toString()===filteredYear
    )
        return(
        <div>
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear}onFilter={newFilterHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    )
}
export default Expenses;