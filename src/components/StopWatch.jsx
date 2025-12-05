import { useEffect, useState } from "react"

export function StopWatch() {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;

        const id = setInterval(() => {
            setTime(prev => prev + 10)
        }, 10)

        return () => clearInterval(id)
    }, [running])

    return (
        <>
            <h1>StopWatch</h1>
            <div>
                <span>{('0' + Math.floor(time / 60000) % 60).slice(-2)}:</span>
                <span>{('0' + Math.floor(time / 1000) % 60).slice(-2)}:</span>
                <span>{('0' + Math.floor(time / 10) % 100).slice(-2)}</span>
            </div>

            <div>
                {!running ? (
                    <button onClick={() => setRunning(true)}>Start</button>
                ) : (
                    <button onClick={() => setRunning(false)}>Stop</button>
                )}
                <button onClick={() => {
                    setRunning(false)
                    setTime(0)
                }}>Reset</button>
            </div>
        </>
    )
}