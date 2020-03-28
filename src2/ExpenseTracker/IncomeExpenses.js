import React, { useContext } from 'react'
import style from './ExpenseTracker.module.css'
import { GlobalContext } from './context/GlobalState'

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <div className={style.inc_exp_container}>
            <div>
                <h4>Income</h4>
                <p className={style.money + style.plus}>{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className={style.money + style.minus}>{expense}</p>
            </div >
        </div >

    )
}

export default IncomeExpenses
