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
            <div className='weather-div'>
                <img src={weather} className='weather' alt={"Weather"}/>
            </div>
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
                            <img src={light} alt={"Light Intensity"}/>
                            <p>Light</p>
                        </div>
                        <div className='intensity-icon'>
                            <img src={medium} alt={"Moderate Intensity"}/>
                            <p>Moderate</p>
                        </div>
                        <div className='intensity-icon'>
                            <img src={hard} alt={"Vigorous Intensity"}/>
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
                <img src={swings} alt={"Henry and Jasmine on Swings"}/>
            </div>
            <img src={footerImage} className='footer' alt={"Grass"}/>
        </div>
    )
}

export default ExerciseLog;