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
import {ExerciseLog, FamilyMember} from "../../Structs/DataTypes";

const ExerciseLogPage = () => {
    const [child, setChild] = useState("");
    const [exercise, setExercise] = useState("");
    const [intensity, setIntensity] = useState("");
    const [duration, setDuration] = useState("");
    const navigate = useNavigate();
    const [exerciseLog, setExerciseLog] = useState({} as ExerciseLog);

    function checkAllFormsFilled() {
        return child.length > 0 && exercise.length > 0 && intensity.length > 0 && duration.length > 0;
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("family_member_name", child)
        formData.append("intensity", intensity)
        formData.append("duration", duration)
        formData.append("type", exercise)
        return fetch(`http://127.0.0.1:3333/exerciseLogs`, {
            method: "POST",
            body: formData,

        })
            .then(response => {
                if(response.ok) {
                    window.alert("Exercise log submitted!");
                    return response.json();
                }
                throw new Error("Invalid email");
            })
            .then(response => {
                sessionStorage.setItem("session_key", response.token);
                navigate("/login");
            })
            .catch(err => {
                sessionStorage.clear();
                window.alert(err);
            })
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
                        <input value={exerciseLog?.family_member_name ? String(exerciseLog?.family_member_name) : ''} onChange={(e) => {
                            setExerciseLog((exerciseLog) => {
                                setChild(e.target.value);
                                return {...exerciseLog, family_member_name: e.target.value} as ExerciseLog
                            });
                        }}/>
                    </div>
                    <div className='label-input'>
                        <label>Exercise Type</label>
                        <input value={exerciseLog?.type ? String(exerciseLog?.type) : ''} onChange={(e) => {
                            setExerciseLog((exerciseLog) => {
                                setExercise(e.target.value);
                                return {...exerciseLog, type: e.target.value}
                            });
                        }}/>
                    </div>
                    <div className='intensity label-input'>
                        <label>Intensity</label>
                        <div className="icons">
                            <div className={intensity === 'Light' ? 'intensity-icon selected' : "intensity-icon"} onClick={(e => setIntensity("Light"))}>
                                <img src={light} alt={"Light Intensity"} />
                                <p>Light</p>
                            </div>
                            <div className={intensity === 'Moderate' ? 'intensity-icon selected' : "intensity-icon"} onClick={(e => setIntensity("Moderate"))}>
                                <img src={medium} alt={"Moderate Intensity"}/>
                                <p>Moderate</p>
                            </div>
                            <div className={intensity === 'Vigorous' ? 'intensity-icon selected' : "intensity-icon"} onClick={(e => setIntensity("Vigorous"))}>
                                <img src={hard} alt={"Vigorous Intensity"}/>
                                <p>Vigorous</p>
                            </div>
                        </div>
                    </div>
                    <div className='label-input'>
                        <label>Duration</label>
                        <input placeholder="# of Minutes" value={exerciseLog?.duration ? String(exerciseLog?.duration) : ''} onChange={(e) => {
                            setExerciseLog((exerciseLog) => {
                                setDuration(e.target.value);
                                return {...exerciseLog, duration: e.target.value}
                            });
                        }}/>
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

export default ExerciseLogPage;