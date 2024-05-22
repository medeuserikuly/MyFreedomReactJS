import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import getUsers from '../services';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../header/Header';
import Button from 'react-bootstrap/Button';


const User = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const params = useParams()
    const URL = 'https://jsonplaceholder.typicode.com/users/' + params.id

    useEffect(() => {
        getUsers(URL)
            .then(res => setUser(res))
            .catch((e) => {
                if (e) {
                    navigate('/404')
                }
            })
    }, [])

    if (!user) {
        return <div>Loading...</div>;
        // navigate('/404')
    }
    return (
        <>
            <Header/>
            <Card style={{ width: '18rem', margin: '50px auto' }}>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.phone}</Card.Subtitle>
                <Card.Text style={{fontSize: '15px'}}>
                    {`${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}
                </Card.Text>
            </Card.Body>
            <Button onClick={() => navigate('/users')} variant="primary">Back</Button>
        </Card>
        </>
    );
}

export default User;
