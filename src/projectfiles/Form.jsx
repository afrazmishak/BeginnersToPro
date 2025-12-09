import { useState } from "react"

export function Form() {
    const [name, setName] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })

    const addNewName = () => {
        if(!formData.firstName.trim() || !formData.lastName.trim()) return;

        setName(prev => [...prev, formData])
        
        setFormData({
            firstName: '',
            lastName: ''
        })
    }

    return (
        <>

            <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                    setFormData(prev => ({
                        ...prev,
                        firstName: e.target.value
                    }))
                }
            />

            <input 
                type="text" 
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                    setFormData(prev => ({
                        ...prev,
                        lastName: e.target.value
                    }))
                }
            />

            <button onClick={addNewName}>Submit</button>

            <ul>
                {name.map((n, i) => (
                    <li key={i}>{n.firstName} {n.lastName}</li>
                ))}
            </ul>
        </>
    )
}