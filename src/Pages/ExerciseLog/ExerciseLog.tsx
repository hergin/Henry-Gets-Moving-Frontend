import './ExerciseLog.scss';
import weather from "../../Assets/Weather.svg";
import swings from "../../Assets/Swings.png";
import footerImage from "../../Assets/grass.svg";
import React from "react";
import light from '../../Assets/lightIntensityFace.svg';
import medium from '../../Assets/mediumIntensityFace.svg';
import hard from '../../Assets/intenseIntensityFace.svg';

const ExerciseLog = () => {
    return (
        <div className="exercise-log">
            <img src={weather} className='weather'/>
            <h1>Exercise Log</h1>
            <form>
                <div className='log-input'>
                    <div className='label-input'>
                        <label>Child's Name</label>
                        <input/>
                    </div>
                    <div className='label-input'>
                        <label>Exercise Type</label>
                        <input/>
                    </div>
                    <div className='intensity label-input'>
                        <label>Intensity</label>
                        <div className='intensity-icon'>
                            <img src={light}/>
                            <p>Light</p>
                        </div>
                        <div className='intensity-icon'>
                            <img src={medium}/>
                            <p>Moderate</p>
                        </div>
                        <div className='intensity-icon'>
                            <img src={hard}/>
                            <p>Vigorous</p>
                        </div>
                    </div>
                    <div className='label-input'>
                        <label>Duration</label>
                        <input/>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='red-button'>Log Exercise</button>
                </div>
            </form>
            <div className='swings'>
                <img src={swings}/>
            </div>
            <img src={footerImage} className='footer'/>
        </div>
    )
}

export default ExerciseLog;