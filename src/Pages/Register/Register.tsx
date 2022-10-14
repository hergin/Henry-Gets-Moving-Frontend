import './Register.scss';
import {Link} from "react-router-dom";
import swings from "../../Assets/Swings.png";

const Register = () => {
    return (
        <div className="register">
            <h1>Register</h1>
            <form>
                <div className='email-input'>
                    <label>Email</label>
                    <input/>
                    <label>Confirm Email</label>
                    <input/>
                </div>
                <div className='buttons'>
                    <button className='red-button'>Register</button>
                </div>
            </form>
            <div className='swings'>
                <img src={swings}/>
            </div>
        </div>
    )
}

export default Register;