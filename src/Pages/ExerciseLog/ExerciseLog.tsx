import './ExerciseLog.scss';
import swings from "../../Assets/Swings.png";
import React, {useState} from "react";
import light from '../../Assets/lightIntensityFace.svg';
import medium from '../../Assets/mediumIntensityFace.svg';
import hard from '../../Assets/intenseIntensityFace.svg';
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";
import {useNavigate} from "react-router-dom";

const ExerciseLog = () => {
    const [child, setChild] = useState("");
    const [exercise, setExercise] = useState("");
    const [intensity, setIntensity] = useState("");
    const [duration, setDuration] = useState("");
    const navigate = useNavigate();


    function checkAllFormsFilled() {
        return child.length > 0 && exercise.length > 0 && intensity.length > 0 && duration.length > 0;
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        // return fetch(`${API_URL}/users`, {
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
        //         navigate("/login");
        //     })
        //     .catch(err => {
        //         // sessionStorage.clear();
        //         window.alert(err);
        //     })
    }

    return (
        <div className="exercise-log">
            <HelmetProvider>
                <Helmet>
                    <title>Log Exercise</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <BackArrow route="/get-moving"/>
            <h1>Exercise Log</h1>
            <form onSubmit={handleSubmit}>
                <div className='log-input'>
                    <div className='label-input'>
                        <label>Child's Name</label>
                        <input value={child} onChange={(e) => setChild(e.target.value)}/>
                    </div>
                    <div className='label-input'>
                        <label>Exercise Type</label>
                        <input value={exercise} onChange={(e) => setExercise(e.target.value)}/>
                    </div>
                    <div className='intensity label-input'>
                        <label>Intensity</label>
                        <div className="icons">
                            <div className='intensity-icon' onClick={(e => setIntensity("Light"))}>
                                <img src={light} alt={"Light Intensity"} />
                                <p>Light</p>
                            </div>
                            <div className='intensity-icon' onClick={(e => setIntensity("Moderate"))}>
                                <img src={medium} alt={"Moderate Intensity"}/>
                                <p>Moderate</p>
                            </div>
                            <div className='intensity-icon' onClick={(e => setIntensity("Vigorous"))}>
                                <img src={hard} alt={"Vigorous Intensity"}/>
                                <p>Vigorous</p>
                            </div>
                        </div>
                    </div>
                    <div className='label-input'>
                        <label>Duration</label>
                        <input placeholder="# of Minutes" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='red-button' type="submit" disabled={!checkAllFormsFilled()}>Log Exercise</button>
                </div>
            </form>
            <div className='swings'>
                <img src={swings} alt={"Henry and Jasmine on Swings"}/>
            </div>
           <Grass/>
        </div>
    )
}

export default ExerciseLog;