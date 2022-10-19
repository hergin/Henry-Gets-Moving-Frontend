import './Login.scss';
import {Link} from "react-router-dom";
import swings from '../../Assets/Swings.png';
import footerImage from "../../Assets/grass.svg";
import React from "react";
import weather from "../../Assets/Weather.svg";
import {Helmet, HelmetProvider} from "react-helmet-async";

const Login = () => {
    return (
        <div className="login">
            <HelmetProvider>
                <Helmet>
                    <title>Login</title>
                </Helmet>
            </HelmetProvider>
            <div className='weather-div'>
                <img src={weather} className='weather' alt={"Weather"}/>
            </div>
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
            <img src={footerImage} className='footer' alt={"Grass"}/>
        </div>
    )
}

export default Login;