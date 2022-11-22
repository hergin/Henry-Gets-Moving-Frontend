import './Nav.scss'
import Hamburger from "../Hamburger/Hamburger";

export default function Nav() {
    return (
        <div className='menu-nav'>
            <div className='navigation'>
                <ul>
                    <li>Get Moving</li>
                    <li>Recipes</li>
                    <li>Learn More</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
                <div className='hamburger'>
                    <Hamburger/>
                </div>
            </div>
        </div>
    )
}