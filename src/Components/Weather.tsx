import React from "react";
import weather from "../Assets/Weather.svg";
import weatherDesktop from '../Assets/WeatherDesktop.svg';
import weatherMobile from "../Assets/WeatherMobile.svg";
import sun from '../Assets/sun.gif';
import clouds from '../Assets/clouds.gif'

const Weather = () => {
    return (
        <div className='weather-div'>
            {/*<img src={weather} className='weather' alt={"Weather"}/>*/}
            {/*<img src={weatherDesktop} className='weather-desktop' alt={"Weather"}/>*/}
            {/*<img src={weatherMobile} className='weather-mobile' alt={"Weather"}/>*/}
            <div className='weather'>
                <img className='clouds' src={clouds} alt={'clouds'}/>
                <img className='sun' src={sun} alt={'sun'}/>
            </div>
            <div className='weather-desktop'>
                <img className='clouds' src={clouds} alt={'clouds'}/>
                <img className='sun' src={sun} alt={'sun'}/>
            </div>
            <div className='weather-mobile'>
                <img className='clouds' src={clouds} alt={'clouds'}/>
                <img className='sun' src={sun} alt={'sun'}/>
            </div>
        </div>
    )
}

export default Weather;