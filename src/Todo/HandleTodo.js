import React from 'react'
import Todo from './Todo'
export default function HandleTodo({ todos, toggleTodo, time }) {
    return (<>
        {todos.map((todo) => {
            return (
                <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} time={time} />
            )
        })}
    </>)
}
