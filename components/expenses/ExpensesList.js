import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpensesList=(props)=>{
    if(props.items.length===0){
        return <h2 className='expenses-list__fallback'>Element not found</h2>
    }
            return(
                <ul className='expenses-list'>
                {props.items.map((expense)=>(
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
                    </ul>
            )}

export default ExpensesList