import './ExpenseForm.css';
import React, {useState} from 'react';
const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    const[enteredAmt,setEnteredAmt]=useState('');
    
    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
    }
    
    const amtChangeHandler=(e)=>{
        setEnteredAmt(e.target.value)
    }
    
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();

    const ExpenseData={
        title:enteredTitle,
        amount:enteredAmt,
        date:new Date(enteredDate)
    }    
    props.onSaveExpenseData(ExpenseData)
    setEnteredTitle('')
    setEnteredAmt('')
    setEnteredDate('')
    }

    return(
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmt} onChange={amtChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2022-10-05" max="2023-06-06" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit" >Add Expense</button>
        </div>
    </form>
    );
}
export default ExpenseForm;