import classes from './footer.module.css'

function About() {
    return (
        <div className={classes.about}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci harum possimus sit porro iure error cum quisquam aliquam maiores. Sapiente quos iusto dolorum dolore sint praesentium soluta ab. Suscipit, eos?
        </div>
    )
}

function Contacts() {
    return (
        <div className={classes.contacts}>
            <div className={classes.title}>Контакты</div>
            <div>8 705 705 60 50</div>
            <div>Astana</div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className={classes.container}>
            <About/>
            <Contacts/>
        </div>
    );
}

export default Footer;
