import { useEffect, useState } from 'react';
import './form.css'


const Form = ({ addUser, selectedUser, setSelectedUser }) => {
    
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        street: '',
        city: ''
    })

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(({
            ...user,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(user);
        setUser({
            name: '',
            username: '',
            email: '',
            street: '',
            city: '',
        })
        setSelectedUser(null)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="text"
                name="name"
                placeholder="name"
                value={user.name}
                onChange={handleChange}
            />
            <input
                required
                type="text"
                name="username"
                placeholder="username"
                value={user.username}
                onChange={handleChange}
            />
            <input
                required
                type="text"
                name="email"
                placeholder="email"
                value={user.email}
                onChange={handleChange}
            />
            <input
                required
                type="text"
                name="street"
                placeholder="street"
                value={user.street}
                onChange={handleChange}
            />
            <input
                required
                type="text"
                name="city"
                placeholder="city"
                value={user.city}
                onChange={handleChange}
            />
            <button type="submit">Add user</button>
        </form>
    );
};

export default Form;
