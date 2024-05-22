import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate('/users')}>Users</Nav.Link>
                    <Nav.Link onClick={() => navigate('/hw6')}>Homework 6</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
