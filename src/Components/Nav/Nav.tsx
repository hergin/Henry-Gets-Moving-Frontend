import './Nav.scss'
import Hamburger from "../Hamburger/Hamburger";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import API from "../../API";

export default function Nav() {
    const [open, setOpen] = useState(false);
    let nav = useNavigate()

    const toggleMenu = () => {
        setOpen(!open)
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