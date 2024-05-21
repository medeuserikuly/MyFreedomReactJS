import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/table/Table'
import Form from './components/form/Form';
import { v4 as uuidv4 } from "uuid";

function App() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [selectedUser, setSelectedUser] = useState()

	const getUsers = async () => {
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await res.json()
			const userData = data.map(user => ({
				id: user.id,
				name: user.name,
				username: user.username,
				email: user.email,
				city: user.address.city,
				street: user.address.street,
			}))
			setUsers(userData)
			setLoading(false)
			
		} catch (e) {
			console.log(e);
			setLoading(false)
		} finally {
            setLoading(false)
        }
	}
	
	useEffect(() => {
		getUsers()
	}, [])

	const addUser = (user) => {
		setUsers([
			{	
				id: uuidv4().substring(0, 2), 
				name: user.name, 
				username: 
				user.username, 
				email: user.email,
				city: user.city,
				street: user.street,
			}, ...users])
	}

	const sortBy = (key) => {
		const sortedUsers = [...users].sort((a, b) => {
		  if (a[key] < b[key]) return -1
		  if (a[key] > b[key]) return 1
		  return 0
		});
		setUsers(sortedUsers)
	}

	return (
		<>
			<Form 
				addUser={addUser}
				selectedUser={selectedUser}
				setSelectedUser={setSelectedUser}/>
			{loading ? 'Loading' : 
				<Table 
					usersData={users}
					sortBy={sortBy} 
					setSelectedUser={setSelectedUser}/>}
		</>
	)
}

export default App
