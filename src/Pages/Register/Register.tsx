import './Register.scss';
import swings from "../../Assets/Swings.png";
import React, {useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";

const Register = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");

    function checkEmailsMatch() {
        return email === confirmEmail && email.length > 0 && confirmEmail.length > 0;
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
    }

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
            <form onSubmit={handleSubmit}>
                <div className='email-input'>
                    <label htmlFor='email-box'>Email</label>
                    <input id='email-box' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor='confirm-email-box'>Confirm Email</label>
                    <input id='confirm-email-box' value={email} onChange={(e) => setConfirmEmail(e.target.value)}/>
                </div>
                <div className='buttons'>
                    <button className='red-button' type="submit" disabled={!checkEmailsMatch()}>Register</button>
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