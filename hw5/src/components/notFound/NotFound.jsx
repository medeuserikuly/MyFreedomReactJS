import { useNavigate } from 'react-router-dom';
import './notFound.css'
import Button from 'react-bootstrap/Button';


const NotFound = () => {
    const nav = useNavigate()
    return (
        <div className='wrapper'>
            <h2>404</h2>
            <p>Sorry, we couldn't find this page.</p>
            <Button onClick={() => nav('/')} variant="primary">Back To Home</Button>
        </div>
    );
}

export default NotFound;
