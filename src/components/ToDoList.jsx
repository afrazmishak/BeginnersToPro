import { useState } from "react"

export function ToDoList() {
    //State to hold the list of todo items
    const [todo, setTodo] = useState([
        { text: 'Buy Milk', checked: false }
    ])

    //State to hold the text input for adding new todo items
    const [textAddToDo, setTextAddToDo] = useState('')

    //Function to add a new todo item
    const addTodo = (newTodo) => {

        //Prevent adding empty todo items
        if (!newTodo.text.trim()) return;
        
        //Update the todo list with the new item
        setTodo(prev => [...prev, newTodo])

        //Clear the input field after adding
        setTextAddToDo('')
    }

    //Function to remove all checked todo items
    const removeSelected = () => {
        //Filter out checked items from the todo list
        setTodo(prev => prev.filter(item => !item.checked))
    }

    //Function to toggle the checked status of a todo item
    const toggleChecked = (index) => {
        //Update the specific item's checked status
        setTodo(prev =>
            prev.map((item, id) =>
                //Toggle the checked status if the index matches
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