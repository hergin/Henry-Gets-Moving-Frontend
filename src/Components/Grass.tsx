import footerImage from "../Assets/grass.svg";
import grassDesktop from "../Assets/grassDesktop.svg";
import React from "react";

const Grass = () => {
    return (
        <div className='grass-div'>
            <img src={footerImage} className='footer' alt={"Grass"}/>
            <img src={grassDesktop} className='footer-desktop' alt={"Grass"}/>
        </div>
    )
}

export default Grass;