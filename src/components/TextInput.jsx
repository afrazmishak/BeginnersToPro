import { useState } from "react"

export function TextInput() {
    const [name, setName] = useState('')

    return (
        <div>
            <label>Your Name:
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Type your name" />
            </label>
            <p>Hello, {name || 'friend'}!</p>
        </div>
    )
}