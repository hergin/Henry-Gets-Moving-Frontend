import './Register.scss';
import swings from "../../Assets/Swings.png";
import footerImage from "../../Assets/grass.svg";
import React from "react";
import weather from "../../Assets/Weather.svg";
import {Helmet, HelmetProvider} from "react-helmet-async";

const Register = () => {
    return (
        <div className="register">
            <HelmetProvider>
                <Helmet>
                    <title>Register</title>
                </Helmet>
            </HelmetProvider>
            <div className='weather-div'>
                <img src={weather} className='weather' alt={"Weather"}/>
            </div>
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
                <img src={swings} alt={"Henry and Jasmine on Swings"}/>
            </div>
            <img src={footerImage} className='footer' alt={"Grass"}/>
        </div>
    )
}

export default Register;