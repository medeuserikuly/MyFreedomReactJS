import classes from './mainBlock.module.css'

const MainCard = () => {
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Заголовок</h2>
            <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci repellat fuga quas quia natus blanditiis maiores? Sint, porro, minus recusandae saepe repudiandae, deserunt voluptates excepturi odit aperiam rerum et?</p>
            <button className={classes.btn}>Button</button>
            
        </div>
    );
}

export default MainCard;
