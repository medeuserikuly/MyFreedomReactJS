import { useEffect, useState } from "react";
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() =>  {
    fetchData()
  }, [])

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
