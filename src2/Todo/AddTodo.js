import React, { useState, useRef, useEffect } from 'react'
import uuidV4 from 'uuid/v4'


function AddTodo(setTodos, todoNameRef) {
    // e.preventDefault()
    // const todoNameRef = useRef()

    const name = todoNameRef.current.value
    console.log(todoNameRef.current.value)

    var d = new Date();
    var datestring = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + " " +
        d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2)

    if (name === '') return
    setTodos(prev => {
        return [...prev, { id: uuidV4(), name: name, complete: false, time: datestring }]
    })
    todoNameRef.current.value = null
    return (
        <div>
            <input placeholder="Pridať nové TODO" className="inputTodo" ref={todoNameRef} type="text" />
            <button className="btn btn1" onClick={AddTodo}>Pridať</button>
        </div>
    )
}

export default AddTodo
