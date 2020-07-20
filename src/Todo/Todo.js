import React from 'react'

function Todo({ todo, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    function handleTodoClick2() {
    }

    function handleFormatTime(time) {
        var month = time.slice(-4, -2)
        var year = time.slice(-8, -4)
        var day = time.slice(-2)
        return (day + "." + month + "." + year)
    }
    return (
        <div onClick={handleTodoClick}>
            <div className="todoList">
                <div className="naLavo">{handleFormatTime(todo.time)}</div>
                <input className="checkboX" type="checkbox" onChange={handleTodoClick2} checked={todo.complete} />
                <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.name}</div>
            </div>
        </div>
    )
}

export default Todo
