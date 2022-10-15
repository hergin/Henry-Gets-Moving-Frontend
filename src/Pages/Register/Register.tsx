import './Register.scss';
import {Link} from "react-router-dom";
import swings from "../../Assets/Swings.png";
import footerImage from "../../Assets/grass.svg";
import React from "react";
import weather from "../../Assets/Weather.svg";

const Register = () => {
    return (
        <div className="register">
            <img src={weather} className='weather'/>
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
            <img src={footerImage} className='footer'/>
        </div>
    )
}

export default Register;