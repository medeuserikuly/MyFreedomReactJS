import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import getUsers from '../services';
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUsers('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res))
            .catch((e) => console.log(e))
    }, [])

    return (
        <>
            <Header/>
            <ListGroup defaultActiveKey="#link1" style={{margin: '50px auto', padding: '50px'}}>
                {users.length > 0 ? (
                    users.map(user => (
                        <ListGroup.Item 
                            action
                            key={user.id}
                            onClick={() => navigate(`/users/${user.id}`)}>
                            {user.name}
                        </ListGroup.Item>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </ListGroup>
        </>
    );
}

export default Users;
