import React, { useContext } from 'react'
import style from './ExpenseTracker.module.css'
import { GlobalContext } from './context/GlobalState'
import Transaction from './Transaction'

const LOCAL_STORAGE_KEY = 'ExpenseTracker'

function TransactionList() {
    const { transactions } = useContext(GlobalContext)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions))

    return (
        <>
            <h3 className={style.h3Exp}>History</h3>
            <ul className={style.list}>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}

            </ul>
        </>
    )
}

export default TransactionList
