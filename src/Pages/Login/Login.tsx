import './Login.scss';
import {Link} from "react-router-dom";
import swings from '../../Assets/Swings.png';
import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";

const Login = () => {
    return (
        <div className="login">
            <HelmetProvider>
                <Helmet>
                    <title>Login</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
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
                <img src={swings} alt={"Henry and Jasmine on Swings"}/>
            </div>
          <Grass/>
        </div>
    )
}

export default Login;