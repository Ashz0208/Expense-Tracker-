import React , {useState} from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_VALUE= [
  {
    id: 'e1',
    title: 'Health Insurance',
    amount: 10000,
    date: new Date(2023, 6, 5),
  },
  { id: 'e2', title: 'TV', amount: 30000, date: new Date(2023, 5, 23) },
  {
    id: 'e3',
    title: 'Laptop',
    amount: 50000,
    date: new Date(2023, 5, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 2500,
    date: new Date(2023, 4, 12),
  },
];



const App=()  =>{
  const[expenses,setExpenses]=useState(DUMMY_VALUE)
  const onSaveNewExpense=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
    //console.log("App.js")
    //console.log(expense)
  }
  return (
    <div className="App">
      <Expenses items={expenses}/>
      <NewExpense onSave={onSaveNewExpense}/>
    </div>
  );
}

export default App;
