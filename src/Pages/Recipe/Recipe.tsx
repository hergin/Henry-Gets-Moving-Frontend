import './Recipe.scss';
import weather from "../../Assets/Weather.svg";
import recipeStock from "../../Assets/recipeStock.jpg";
import {Link} from "react-router-dom";
import footerImage from "../../Assets/grass.svg";
import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import grassDesktop from "../../Assets/grassDesktop.svg";
import weatherMobile from "../../Assets/WeatherMobile.svg";

type Recipe = {
    [key: string]: any;
    thumbnail: string;
    name: string;
    category: string;
}

const Recipe = () => {
    const recipe_list = [
        {
            thumbnail: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-pizza-puffs-recipe-280x280.jpg',
            name: "Some name",
            category: "Healthy",
        },
        {
            thumbnail: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-pizza-puffs-recipe-280x280.jpg',
            name: "Some name",
            category: "Healthy",
        },
        {
            thumbnail: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-pizza-puffs-recipe-280x280.jpg',
            name: "Some name",
            category: "Healthy",
        },
        {
            thumbnail: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-pizza-puffs-recipe-280x280.jpg',
            name: "Some name",
            category: "Healthy",
        },
    ]

    const recipeLayout = (individualRecipe: Recipe[]) => {
        return individualRecipe.map((recipe) => {
                return (
                    <div className='grid-content'>
                        <Link to={'/individual-recipe'}><img src={recipe.thumbnail} alt={recipe.name + "Thumbnail"}/></Link>
                        <p className='name'>{recipe.name}</p>
                        <p className='category'>{recipe.category}</p>
                    </div>
                )
            }
        )
    }
    return (
        <div className="recipe">
            <HelmetProvider>
                <Helmet>
                    <title>Recipes</title>
                </Helmet>
            </HelmetProvider>
            <div className='weather-div'>
                <img src={weather} className='weather' alt={"Weather"}/>
                <img src={weatherMobile} className='weather-mobile' alt={"Weather"}/>
            </div>
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
                    </select>
                    <input id='search' placeholder="Search"/>
                </div>
                <div className='recipe-grid'>
                    {recipeLayout(recipe_list)}
                </div>
                <div className='see-more'>
                    <button className='red-button'>See More</button>
                </div>
            </div>
            <img src={footerImage} className='footer' alt={"Grass"}/>
            <img src={grassDesktop} className='footer-desktop' alt={"Grass"}/>
        </div>
    )
}

export default Recipe;