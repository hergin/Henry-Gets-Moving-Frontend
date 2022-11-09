import './Recipe.scss';
import recipeStock from "../../Assets/recipeStock.jpg";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import recipeLayout from '../../Components/recipeLayout'
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import API from "../../API";
import {Recipe} from "../../Structs/DataTypes";

const Recipe = () => {
    const [recipes, setRecipes] = useState([] as Recipe[])
    useEffect(() => {
        API.getRecipes().then((recipes) => setRecipes(recipes));
    }, [])

    return (
        <div className="recipe">
            <HelmetProvider>
                <Helmet>
                    <title>Recipes</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <div className='otd-div'>
                <div className='otd-image'>
                    <img src={recipeStock} alt={"OTD Thumbnail"}/>
                </div>
                <div className='otd-text'>
                    <h2>Recipe of the Day</h2>
                    <p>Recipe Name</p>
                </div>
            </div>
            <div className='recipe-content'>
                <div className='select-search'>
                    <select>
                        <option value="" hidden={true}>Category Selection</option>
                        <option value="All">All</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Nut-Free">Nut-Free</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Gluten Free">Gluten Free</option>
                    </select>
                    <input id='search' placeholder="Search"/>
                </div>
                <div className='recipe-grid'>
                    {recipeLayout(recipes)}
                </div>
                <div className='see-more'>
                    <button className='red-button'>See More</button>
                </div>
            </div>
           <Grass/>
        </div>
    )
}

export default Recipe;