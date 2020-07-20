import React, { useState, useRef, useEffect } from 'react'
import uuidV4 from 'uuid/v4'
import './Todo.css'
import HandleTodo from './HandleTodo'
import CompareCislo from './CompareCislo'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'


function TodoApp() {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()
    const [casSort, setCasSort] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)
    const [myStyle, setMyStyle] = useState({ display: 'none' })

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
        // handleNumberTime()
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        e.preventDefault()
        const name = todoNameRef.current.value
        if (selectedDate) {
            var d = selectedDate
            var dateFullNumber = d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2)
        }

        if (!name || !dateFullNumber) {
            setMyStyle({ display: 'block' })
        }
        else {
            setMyStyle({ display: 'none' })
            setTodos(prev => {
                return [...prev, { id: uuidV4(), name: name, complete: false, time: dateFullNumber }]
            })
            todoNameRef.current.value = null
            setSelectedDate(null)
        }


    }

    function handleClearTodos(e) {
        e.preventDefault()
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    function handleRemoveAllTodos(e) {
        e.preventDefault()

        if (window.confirm('Are u sure?')) {
            setTodos([])
        }
    }


    function handleNumberTime() {
        setCasSort(!casSort)
        CompareCislo(todos, casSort)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }


    // function Priklad3(A1, A2, A3, A4, B1, B2, y1, y2) {
    //     let A = [A1, A2, A3, A4]
    //     let B = [B1, B2]
    //     let y = [y1, y2]

    //     // console.log(A1, A2, A3, A4, B1, B2, y1, y2)

    //     console.log("Riaditelnost:")
    //     console.log("Riaditelnost:")
    //     let v11 = B[0]
    //     let v12 = (A[0] * B[0]) + (A[1] * B[1])
    //     let v21 = B[1]
    //     let v22 = (A[2] * B[0]) + (A[3] * B[1])
    //     console.log(v11, v12)
    //     console.log(v21, v22)
    //     let vysMatica = (v11 * v22) - (v12 * v21)
    //     if (vysMatica === 0) {
    //         console.log("nie je riaditelny, lebo Mc= " + vysMatica + " a nemoze sa rovnat 0!")
    //     }
    //     else {
    //         console.log("Je riaditelny, lebo Mc= " + vysMatica + " co je rozdielne od nuly")
    //     }


    //     console.log("Pozorovatelnost:")
    //     console.log("Pozorovatelnost:")

    //     let Ca = [((y[0] * A[0]) + (y[1] * A[2])), ((y[0] * A[1]) + (y[1] * A[3]))]
    //     let Mo = [y[0], y[1], Ca[0], Ca[1]]
    //     let MoVys = (Mo[0] * Mo[3]) - (Mo[1] * Mo[2])
    //     console.log("Mo je:")
    //     console.log(Mo[0], Mo[1])
    //     console.log(Mo[2], Mo[3])
    //     // console.log("Vysledok Mo matice je: " + MoVys)

    //     if (MoVys === 0) {
    //         console.log("nie je pozorovatelny, lebo Mo= " + MoVys + " a nemoze sa rovnat 0!")
    //     }
    //     else {
    //         console.log("Je pozorovatelny, lebo Mo= " + MoVys + " co je rozdielne od nuly")
    //     }


    // }


    return (
        <div className="TodoMain">

            <h1>Todo APP</h1>
            <div className="todo">

                <HandleTodo todos={todos} toggleTodo={toggleTodo} />
                <form className="">
                    <input placeholder="Pridať nové TODO" className="inputTodo" ref={todoNameRef} type="text" />
                    <div className="divForDatePicker">
                        <DatePicker style={{ width: '100%' }} className="datePicker"
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat='dd/MM/yyyy'
                            isClearable
                            placeholderText="Dokedy"
                        />
                    </div>
                    <div className="musisVyplnitObePolia" style={myStyle}>musiš vyplniť obe polia</div>
                    <button className="btn btn1" onClick={handleAddTodo}>Pridať</button>
                    <button className="btn btn2" onClick={handleClearTodos}>Odstraniť hotové</button>
                    <button className="btn btnDel" onClick={handleRemoveAllTodos}>Odstraniť všetky</button>
                    {/* <button className="btn btn2" onClick={handleNumber}>Zoradiť podľa názvu</button> */}
                    <button className="btn btn2" style={{ width: '100%' }} onClick={handleNumberTime}>Zoradiť podľa dátumu</button>
                    {/* <button className="btn btn1" onClick={hadnleSortComplete}>Zoradiť podľa dokončenia</button> */}
                </form>

                {
                    (todos.length > 0 && todos.filter(todo => !todo.complete).length !== 0)
                        ? <div className="nesplnene">{todos.filter(todo => !todo.complete).length} nesplnené</div>
                        : <div className="nesplnene splnene">Všetky todo splnené</div>
                }
            </div>




        </div>
    )
}

export default TodoApp
