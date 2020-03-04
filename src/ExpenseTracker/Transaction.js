import React, { useContext } from 'react'
import style from './ExpenseTracker.module.css'
import { GlobalContext } from './context/GlobalState'

function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <li className={transaction.amount < 0 ? style.minus : style.plus}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className={style.delete_btn}>x</button>
        </li>
    )
}

export default Transaction
