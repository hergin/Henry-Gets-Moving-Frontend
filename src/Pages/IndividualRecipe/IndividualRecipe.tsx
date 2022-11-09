import './IndividualRecipe.scss';
import React from "react";
import recipeStock from '../../Assets/recipeStock.jpg';
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";

const IndividualRecipe = () => {
    return (
        <div className="individual-recipe">
            <HelmetProvider>
                <Helmet>
                    <title>RecipePage Name</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <BackArrow route="/recipes"/>
            <div className='otd-div'>
                <div className='otd-image'>
                    <img src={recipeStock} alt='RecipePage Name'/>
                </div>
                <div className='otd-text'>
                    <h2>RecipePage of the Day</h2>
                    <p>Cook Time</p>
                </div>
            </div>
            <div className='recipe-text'>
                <p>
                    Ingredients:
                    <br/>
                    Steps: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <Grass/>
        </div>
    )
}

export default IndividualRecipe;