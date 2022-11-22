import './Header.scss';
import {Link, useLocation} from "react-router-dom";
import API from "../../API";
import squirm from '../../Assets/worm.png'

const Header = () => {
    let location = useLocation()
    let excludedPaths = ['/admin']

    if (excludedPaths.includes(location.pathname)) {
        return null;
    }

    function headerLogIn() {
        if (API.isLoggedIn()) {
            return <div className='squirm'><img src={squirm} alt=""/></div>
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
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <Link to={'/recipes'}>Eat Healthy</Link>
                        <Link to={'/learn-more'}>Learn More</Link>
                    </div>
                </div>
                <Link to={'/games'}>Games</Link>
                <Link to={'/about'}>About</Link>
                {headerLogIn()}
            </nav>
        </div>

    )
}

export default Header;