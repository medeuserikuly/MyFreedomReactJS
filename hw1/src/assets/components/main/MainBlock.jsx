import classes from './mainBlock.module.css'
import MainCard from './mainCard';


const MainBlock = () => {
    return (
        <div className="container">
            <div className={classes.container}>
                <MainCard/>
                <MainCard/>
                <MainCard/>
            </div>
        </div>
    );
}

export default MainBlock;
