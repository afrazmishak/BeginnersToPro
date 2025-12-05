import { useState } from "react"

export function ToggleButton() {
    const [on, setOn] = useState(false)
    let statusMessage;
    if (on) {
        statusMessage = 'The button is ON'
    } else {
        statusMessage = 'The button is OFF'
    }

    return (
        <>
            <p>{statusMessage}</p>
            <button onClick={() => setOn(prev => !prev)}>
                {on ? 'ON' : 'OFF'}
            </button>
        </>
    )
}