import './ExerciseLog.scss';
import swings from "../../Assets/Swings.png";
import React from "react";
import light from '../../Assets/lightIntensityFace.svg';
import medium from '../../Assets/mediumIntensityFace.svg';
import hard from '../../Assets/intenseIntensityFace.svg';
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";

const ExerciseLog = () => {
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
                        <div className="icons">
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
                    </div>
                    <div className='label-input'>
                        <label>Duration</label>
                        <input placeholder="# of Minutes"/>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='red-button'>Log Exercise</button>
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