import './Login.scss';
import {Link} from "react-router-dom";
import swings from '../../Assets/Swings.png';

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <div className='email-input'>
                    <label>Email</label>
                    <input/>
                </div>
                <div className='buttons'>
                    <button className='red-button'>Login</button>
                    <Link to={'/register'} className='register-button red-button'>Register</Link>
                </div>
            </form>
            <div className='swings'>
                <img src={swings}/>
            </div>
        </div>
    )
}

export default Login;