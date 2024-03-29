import './Header.scss';
import {Link, useLocation, useNavigate} from "react-router-dom";
import API from "../../API";
import squirm from '../../Assets/worm.png'
import Nav from "../Nav/Nav";

const Header = () => {
    let location = useLocation()
    let excludedPaths = ['/admin']
    let nav = useNavigate()

    if (excludedPaths.includes(location.pathname)) {
        return null;
    }

    function logOut() {
        API.logOut();
        nav('/');
    }

    function headerLogIn() {
        if (API.isLoggedIn()) {
            return <button className='red-button' onClick={logOut}>Log out</button>
        } else {
            return <Link to={'/login'} className='login-button'>Login</Link>
        }
    }

    return (
        <div className="header">
            <div className='header-home'>
                <Link to={'/'}>Home</Link>
            </div>
            <nav className='header-links'>
                <Link to={'/get-moving'}>Get Moving</Link>
                <div className="dropdown">
                    <button className="dropbtn">Eat Healthy</button>
                    <div className="dropdown-content">
                        <Link to={'/recipes'} className='dropdown-links'>Recipes</Link>
                        <Link to={'/learn-more'} className='dropdown-links'>Learn More</Link>
                    </div>
                </div>
                <Link to={'/games'}>Games</Link>
                <Link to={'/about'}>About</Link>
                {headerLogIn()}
            </nav>
            <div className='hamburger-menu'>
                <Nav/>
            </div>
        </div>

    )
}

export default Header;