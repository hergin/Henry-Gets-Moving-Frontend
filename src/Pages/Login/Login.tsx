import './Login.scss';
import {Link} from "react-router-dom";
import swings from '../../Assets/Swings.png';
import React, {useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";

const Login = () => {
    const [email, setEmail] = useState("");

    function validateForm() {
        return email.length > 0;
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        // return fetch(`${API_URL}/users/login`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         email: email
        //     })
        // })
        //     .then(response => {
        //         if(response.ok) {
        //             return response.json();
        //         }
        //         throw new Error("Invalid email");
        //     })
        //     .then(response => {
        //         // sessionStorage.setItem("session_key", response.token);
        //         navigate("/get-moving");
        //     })
        //     .catch(err => {
        //         // sessionStorage.clear();
        //         window.alert(err);
        //     })
    }

    return (
        <div className="login">
            <HelmetProvider>
                <Helmet>
                    <title>Login</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='email-input'>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email"/>
                </div>
                <div className='buttons'>
                    <button className='red-button' type="submit" disabled={!validateForm()}>Login</button>
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