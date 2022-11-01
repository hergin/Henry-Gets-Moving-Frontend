import './Register.scss';
import swings from "../../Assets/Swings.png";
import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";

const Register = () => {
    return (
        <div className="register">
            <HelmetProvider>
                <Helmet>
                    <title>Register</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <BackArrow route="/login"/>
            <h1>Register</h1>
            <form>
                <div className='email-input'>
                    <label htmlFor='email-box'>Email</label>
                    <input id='email-box'/>
                    <label htmlFor='confirm-email-box'>Confirm Email</label>
                    <input id='confirm-email-box'/>
                </div>
                <div className='buttons'>
                    <button className='red-button'>Register</button>
                </div>
            </form>
            <div className='swings'>
                <img src={swings} alt={"Henry and Jasmine on Swings"}/>
            </div>
           <Grass/>
        </div>
    )
}

export default Register;