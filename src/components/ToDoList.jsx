import { useState } from "react"

export function ToDoList () {
    const [todo, setTodo] = useState(['Buy Milk'])

    const addTodo = newTodo => setTodo(prev => [...prev, newTodo])
    const removeFirst = () => setTodo(prev => prev.slice(1))

    return (
        <div>
            <button onClick={() => addTodo('New item')}>Add</button>
            <button onClick={removeFirst}>Remove First</button>
            <ul>{todo.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
    )
}