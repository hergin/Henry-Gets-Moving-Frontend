import './Recipe.scss';
import recipeStock from "../../Assets/recipeStock.jpg";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import recipeLayout from '../../Components/recipeLayout'
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import API from "../../API";
import {Exercise, Recipe, RecipeCategory} from "../../Structs/DataTypes";

const RecipePage = () => {
    const [recipes, setRecipes] = useState([] as Recipe[])
    const [recipeCategory, setRecipeCategory] = useState([] as RecipeCategory[])

    useEffect(() => {
        API.getRecipes().then((recipes) => setRecipes(recipes));
        API.getRecipeCategories().then((category) => setRecipeCategory(category));
    }, [])

    const categoryLayout = (category: RecipeCategory[]) => {
        return category.map((category) => {
                return (
                    <option value={category.id}>{category.name}</option>
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
                        {categoryLayout(recipeCategory)}
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

// @ts-ignore
export default RecipePage