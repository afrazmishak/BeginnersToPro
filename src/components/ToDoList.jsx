import { useState } from "react"

export function ToDoList() {
    const [todo, setTodo] = useState(['Buy Milk'])
    const [textAddToDo, setTextAddToDo] = useState('')

    const addTodo = (newTodo) => {
        if (!newTodo.trim()) return
        setTodo(prev => [...prev, newTodo])
        setTextAddToDo('')
    }
    const removeFirst = () => setTodo(prev => prev.slice(1))

    return (
        <div>
            <input
                type="text"
                value={textAddToDo}
                onChange={(e) => setTextAddToDo(e.target.value)}
            />

            <button onClick={() => addTodo(textAddToDo)}>Add</button>
            <button onClick={removeFirst}>Remove First</button>
            <ul>
                {todo.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    )
}