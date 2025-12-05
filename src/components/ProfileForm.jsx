import { useState } from "react"

export function ProfileForm () {
    const [form, setForm] = useState({firstName: '', lastName: ''})

    const updateFirst = e => setForm(prev => ({...prev, firstName: e.target.value}))
    const updateLast = e => setForm(prev => ({...prev, lastName: e.target.value}))
    return (
        <div>
            <p>Full name: {form.firstName} {form.lastName}</p>
            <input value={form.firstName} onChange={updateFirst} placeholder="First Name" />
            <input value={form.lastName} onChange={updateLast} placeholder="Last Name" />
        </div>
    )
}