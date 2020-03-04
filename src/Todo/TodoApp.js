import React, { useState, useRef, useEffect } from 'react'
// import Todo from './Todo'
import uuidV4 from 'uuid/v4'
import './Todo.css'
import HandleTodo from './HandleTodo'
import Compare from './Compare'
import CompareCislo from './CompareCislo'
const LOCAL_STORAGE_KEY = 'todoApp.todos'


function Test(todos, casSort) {
    CompareCislo(todos, casSort)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

function HandleSortTodo(todos, pom2) {
    Compare(todos, pom2)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

function TodoApp() {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()
    const [casSort, setCasSort] = useState(false)
    const [pom2, setPom2] = useState(false)
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
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

        var d = new Date();
        var datestring = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + " " +
            d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2)

        if (name === '') return
        setTodos(prev => {
            return [...prev, { id: uuidV4(), name: name, complete: false, time: datestring }]
        })
        todoNameRef.current.value = null
    }

    function handleClearTodos(e) {
        e.preventDefault()
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    function handleRemoveAllTodos(e) {
        e.preventDefault()
        setTodos([])
    }

    function handleNumber(e) {
        e.preventDefault()
        setPom2(!pom2)
        HandleSortTodo(todos, pom2)
    }

    function handleNumberTime(e) {
        e.preventDefault()
        setCasSort(!casSort)
        Test(todos, casSort)
    }

    function hadnleSortComplete(e) {
        e.preventDefault()

        const todosPom1 = todos.filter(todo => todo.complete)
        const todosPom2 = todos.filter(todo => !todo.complete)

        if (complete) { setTodos(todosPom1.concat(todosPom2)) }
        else { setTodos(todosPom2.concat(todosPom1)) }

        setComplete(!complete)
    }

    return (
        <div className="TodoMain">
            <h1>Todo APP</h1>
            <div className="todo">

                <HandleTodo todos={todos} toggleTodo={toggleTodo} />
                <form className="">
                    <input placeholder="Pridať nové TODO" className="inputTodo" ref={todoNameRef} type="text" />
                    <button className="btn btn1" onClick={handleAddTodo}>Pridať</button>
                    <button className="btn btn2" onClick={handleClearTodos}>Odstraniť hotové</button>
                    <button className="btn btnDel" onClick={handleRemoveAllTodos}>Odstraniť všetky</button>
                    <button className="btn btn2" onClick={handleNumber}>Zoradiť podľa názvu</button>
                    <button className="btn btn2" onClick={handleNumberTime}>Zoradiť podľa času</button>
                    <button className="btn btn1" onClick={hadnleSortComplete}>Zoradiť podľa dokončenia</button>
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
