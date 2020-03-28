import React from 'react'

function Todo({ todo, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    function handleTodoClick2() {
    }
    return (
        <div onClick={handleTodoClick}>
            <div className="todoList">
                <div className="naLavo">{todo.time}</div>
                <input className="checkboX" type="checkbox" onChange={handleTodoClick2} checked={todo.complete} />
                <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.name}</div>
            </div>
        </div>
    )
}

export default Todo
