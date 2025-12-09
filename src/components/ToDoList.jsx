import { useState } from "react"

export function ToDoList() {
    const [todo, setTodo] = useState([
        { text: 'Buy Milk', checked: false }
    ])

    const [textAddToDo, setTextAddToDo] = useState('')

    const addTodo = (newTodo) => {
        if (!newTodo.text.trim()) return;
        setTodo(prev => [...prev, newTodo])
        setTextAddToDo('')
    }
    const removeSelected = () => {
        setTodo(prev => prev.filter(item => !item.checked))
    }

    const toggleChecked = (index) => {
        setTodo(prev =>
            prev.map((item, id) =>
                id === index ? { ...item, checked: !item.checked } : item
            )
        )
    }

    return (
        <div>
            <input
                type="text"
                value={textAddToDo}
                onChange={(e) => setTextAddToDo(e.target.value)}
            />

            <button onClick={() => addTodo({
                text: textAddToDo,
                checked: false
            })}>Add</button>

            <button onClick={removeSelected}>Remove</button>

            <ul>
                {todo.map((t, id) => (
                    <li key={id}>
                        <input type="checkbox" checked={t.checked} onChange={() => toggleChecked(id)} />
                        {t.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}