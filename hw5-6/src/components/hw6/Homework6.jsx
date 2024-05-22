import { useContext } from "react";
import { DataContext } from "../ContextComponent";
import classes from './hw6.module.css'
import img from './no-user-image.gif'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';


const Homework6 = () => {
    return (
        <>
            <Header/>
            <View/>
        </>
    );
}

export default Homework6;

const View = () => {
    const {about, team, contacts} = useContext(DataContext)
    const nav = useNavigate()

    return (
        <div className={classes.container}>
            <h1 className={classes.h1}>About us</h1>
            <div className={classes.divider}></div>
            <p className={classes.p}>{about} </p>

            <div className={classes.wrapper}>
                {
                    team.map((user, i) => (
                        <div className={classes.items} key={i}>
                            <div className={classes.username}>{user.name}</div>
                            <div className={classes.username}>{user.jobTitle}</div>
                            <img src={img} className={classes.img}/>
                        </div>
                    ))
                }
            </div>

            <Button onClick={() => nav('/')} variant="primary" style={{display: 'block' ,margin: '20px auto'}}>Back To Home</Button>
        </div>
    )
}