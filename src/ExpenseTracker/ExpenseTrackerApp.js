import React from 'react'
import style from './ExpenseTracker.module.css'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function ExpenseTrackerApp() {
    return (
        <GlobalProvider >
            <div className={style.mainDiv}>
                <h1 className={style.h1Exp}>Expense Tracker</h1>

                <div className={style.containerExp}>
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </div>
        </GlobalProvider>
    )
}

export default ExpenseTrackerApp
