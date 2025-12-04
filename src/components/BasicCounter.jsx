import { useState } from "react"

export function BasicCounter() {
    //Delcraing the state variable "count" with an initial value 0
    const [count, setCount] = useState(0);

    //Update using the setter
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return (
        <>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}