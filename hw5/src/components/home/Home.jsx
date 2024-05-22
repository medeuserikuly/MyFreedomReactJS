import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Button from 'react-bootstrap/Button';

const Home = () => {
    const nav = useNavigate()
    return (
        <>
            <Header/>
            <h1 style={{margin: '0 auto', fontSize: '80px'}}>Homework 5</h1>
            <Button 
                onClick={() => nav('/hw6')} 
                variant="primary"
                style={{marginTop: '50px'}}>
                    Go To Homework 6</Button>

        </>
    )
}

export default Home;
