import React from "react";
import weather from "../Assets/Weather.svg";
import weatherMobile from "../Assets/WeatherMobile.svg";

const Weather = () => {
    return (
        <div className='weather-div'>
            <img src={weather} className='weather' alt={"Weather"}/>
            <img src={weatherMobile} className='weather-mobile' alt={"Weather"}/>
        </div>
    )
}

export default Weather;