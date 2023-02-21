import React from "react";
import sun from '../Assets/sun.gif';
import clouds from '../Assets/clouds.gif'

const Weather = () => {
    return (
        <div className='weather-div'>
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