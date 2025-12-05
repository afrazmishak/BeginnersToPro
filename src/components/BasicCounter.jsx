import { useState } from "react"

export function BasicCounter() {
    //Delcraing the state variable "count" with an initial value 0
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    //Update using the setter
    const increment = () => {
        setCount(prev => prev + 1)
        setMessage("");
    }
    const decrement = () =>
        setCount(prev => {
            if (prev === 0) {
                setMessage("Count cannot be negative");
                return 0;
            };
            return prev - 1

        })

    const multiply = () =>
        setCount(prev => {
            if (prev !== 0) {
                return prev * 2
            } else {
                setMessage('Cannot be multiplied by 0')
                return 0
            }
        })

    const reset = () => setCount(0);

    return (
        <>
            <h2>Count : {count}</h2>
            {message && <p>{message}</p>}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={multiply}>Multply by 2</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}