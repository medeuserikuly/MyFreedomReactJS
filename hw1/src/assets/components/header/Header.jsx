import './header.css'

const Header = () => {
    return (
        <div className="container">
            <div className='header__wrapper'>
                <img src="https://preview.redd.it/berserk-season-of-discovery-eu-guild-v0-dhuysjjursyb1.png?width=640&crop=smart&auto=webp&s=75a30f45d6f21e4630414de6ab1daa037501a4e2" alt="" className="logo" />
                <div className="header__ul">
                    <li>Home</li>
                    <li>Price</li>
                    <li>About us</li>
                    <li>Contacts</li>
                </div>
         </div>
        </div>
    );
}

export default Header;
