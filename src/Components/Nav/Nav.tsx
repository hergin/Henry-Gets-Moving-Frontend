import './Nav.scss'
import Hamburger from "../Hamburger/Hamburger";
import {useState} from "react";
import {Link} from "react-router-dom";
import API from "../../API";
import squirm from "../../Assets/worm.png";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open)
    }

    function headerLogIn() {
        if (API.isLoggedIn()) {
            return <div className='squirm'><img src={squirm} alt=""/></div>
        } else {
            return <Link to={'/login'} className='login-button' onClick={event => setOpen(false)}>Login</Link>
        }
    }

    return (
        <div className='menu-nav'>
            <div className='navigation'>
                <ul className={open ? 'open' : 'closed'}>
                    <li><Link to={'/get-moving'} onClick={event => setOpen(false)}>Get Moving</Link></li>
                    <li><Link to={'/recipes'} onClick={event => setOpen(false)}>Recipes</Link></li>
                    <li><Link to={'/learn-more'} onClick={event => setOpen(false)}>Learn More</Link></li>
                    <li><Link to={'/about'} onClick={event => setOpen(false)}>About</Link></li>
                    <li>{headerLogIn()}</li>
                </ul>
                <div className='hamburger' onClick={toggleMenu}>
                    <Hamburger isOpen={open}/>
                </div>
            </div>
        </div>
    )
}