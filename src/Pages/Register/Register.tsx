import './Register.scss';
import swings from "../../Assets/Swings.png";
import React, {useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../API";

const Register = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const navigate = useNavigate();

    function checkEmailsMatch() {
        return email === confirmEmail && email.length > 0 && confirmEmail.length > 0;
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        return fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": `${API_URL}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Invalid email");
            })
            .then(response => {
                navigate("/login");
            })
            .catch(err => {
                window.alert(err);
            })
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
                    <input id='email-box' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor='confirm-email-box'>Confirm Email</label>
                    <input id='confirm-email-box' type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}/>
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