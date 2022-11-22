import './Nav.scss'
import Hamburger from "../Hamburger/Hamburger";
import {useState} from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const toggleMenu =()=>{
        setOpen(!open)
    }

    return (
        <div className='menu-nav'>
            <div className='navigation'>
                <ul className={open ? 'open' : 'closed'}>
                    <li>Get Moving</li>
                    <li>Recipes</li>
                    <li>Learn More</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
                <div className='hamburger' onClick={toggleMenu}>
                    <Hamburger/>
                </div>
            </div>
        </div>
    )
}