import { useState } from "react"

export function Form() {
    const [name, setName] = useState([]);
    const [textAddName, setTextAddName] = useState('')

    const addNewName = (newName) => {
        if (!newName.trim()) return;
        setName(prev => [...prev, newName])
        setTextAddName('')
    }

    return (
        <>
            <input type="text" value={textAddName} onChange={(e) => setTextAddName(e.target.value)} />
            
            <button onClick={() => addNewName((textAddName))}>Submit</button>

            <ul>
                {name.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        </>
    )
}