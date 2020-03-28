import React, { useState, useContext, useRef } from 'react'
import style from './ExpenseTracker.module.css'
import { GlobalContext } from './context/GlobalState'

// const LOCAL_STORAGE_KEY2 = 'ExpenseTracker2'

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)
    const ref1 = useRef()
    const ref2 = useRef()

    function onSubmit(e) {
        e.preventDefault()
        setText(ref1.current.value)
        setAmount(ref2.current.value)
        const pomX = ref1.current.value
        const pomX2 = ref2.current.value

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text: pomX,
            amount: +pomX2
        }

        addTransaction(newTransaction)

        ref1.current.value = null
        ref2.current.value = null
    }


    return (
        <div>
            <h3 className={style.h3Exp}>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label >Text</label>
                    <input type="text" ref={ref1}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label>Cena</label>
                    <input type="number" ref={ref2}
                        placeholder="Enter amount..." />
                </div>
                <button className={style.btn}>Pridať</button>
            </form>
        </div>
    )
}

export default AddTransaction