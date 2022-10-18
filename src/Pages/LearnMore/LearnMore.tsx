import './LearnMore.scss';
import {Link} from "react-router-dom";
import weather from "../../Assets/Weather.svg";
import recipeStock from "../../Assets/recipeStock.jpg";
import footerImage from "../../Assets/grass.svg";
import React from "react";

type Demonstration = {
    [key: string]: any;
    thumbnail: string;
    name: string;
    category: string;
}

const LearnMore = () => {

    return (
        <div className="learn-more">
            <img src={weather} className='weather'/>
            <div className='diagrams'>
                <h2>Diagrams</h2>
                <div className='demo-image'>

                </div>
            </div>
            <div className='demo-content'>
                <h2>Demonstrations</h2>
                <div className='select-search'>
                    <select>
                        <option value="" hidden={true}>Category Selection</option>
                    </select>
                    <input id='search' placeholder="Search"/>
                </div>
                <div className='demo-grid'>

                </div>
                <div className='see-more'>
                    <button className='red-button'>See More</button>
                </div>
            </div>
            <img src={footerImage} className='footer'/>
        </div>
    )
}

export default LearnMore;