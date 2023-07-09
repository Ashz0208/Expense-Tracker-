import React, {useState} from 'react';
import './NewExpense.css';
import './ExpenseForm.css';
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>{
    const [isEditing, setIsEditing]=useState(false)
    const enterExpenseData=(newExpenseData)=>{
        const ExpenseData={
            ...newExpenseData,
            id:Math.random().toString()
        }
        props.onSave(ExpenseData)
    }
    const startEditinghandler=()=>{
        setIsEditing(true)
    }
    const stopEditinghandler=()=>{
        setIsEditing(false)
    }
    return(
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditinghandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={enterExpenseData} onCancel={stopEditinghandler}/>}
    </div>
    )

}
export default NewExpense;