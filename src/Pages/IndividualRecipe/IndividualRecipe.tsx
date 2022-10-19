import './IndividualRecipe.scss';
import weather from "../../Assets/Weather.svg";
import React from "react";
import footerImage from "../../Assets/grass.svg";
import {Link} from "react-router-dom";
import back from '../../Assets/BackArrow.svg';
import recipeStock from '../../Assets/recipeStock.jpg';

const IndividualRecipe = () => {
    return (
        <div className="individual-recipe">
            <div className='weather-div'>
                <img src={weather} className='weather' alt={"Weather"}/>
            </div>
            <div className='back-arrow'>
                <Link to={'/recipes'}><img src={back} alt="<"/>Back</Link>
            </div>
            <div className='otd-div'>
                <div className='otd-image'>
                    <img src={recipeStock} alt='Recipe Name'/>
                </div>
                <div className='otd-text'>
                    <h2>Recipe of the Day</h2>
                    <p>Cook Time</p>
                </div>
            </div>
            <div className='recipe-text'>
                <p>
                    Ingredients:
                </p>
                <p>
                    Steps: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <img src={footerImage} className='footer' alt={"Grass"}/>
        </div>
    )
}

export default IndividualRecipe;