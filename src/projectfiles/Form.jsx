import { useState } from "react"

export function Form() {
    const [name, setName] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })

    const addNewName = async () => {
        if(!formData.firstName.trim() || !formData.lastName.trim()) return;

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const savedUser = await response.json();
            setName(prev => [...prev, savedUser])

            setFormData({
                firstName: '',
                lastName: ''
            })
        } catch (error) {
            console.error('Error saving user:', error);
        }
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