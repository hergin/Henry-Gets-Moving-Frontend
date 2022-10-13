import './Login.scss';
import {Link} from "react-router-dom";
import swings from '../../Assets/Swings.png';

const Login = () => {
    return (
        <div className="login">
            <p>Login</p>
            <form>
                <div className='email-input'>
                    <label>Email</label>
                    <input/>
                </div>
                <div className='buttons'>
                    <button>Login</button>
                    <Link to={'/register'}>Register</Link>
                </div>
            </form>
            <div className='swings'>
                <img src={swings}/>
            </div>
        </div>
    )
}

export default Login;