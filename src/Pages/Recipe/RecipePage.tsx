import './Recipe.scss';
import recipeStock from "../../Assets/recipeStock.jpg";
import React, {useEffect, useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import recipeLayout from '../../Components/recipeLayout'
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import API from "../../API";
import {Recipe, RecipeCategory} from "../../Structs/DataTypes";

const RecipePage = () => {
    const [recipes, setRecipes] = useState([] as Recipe[])
    const [recipeCategory, setRecipeCategory] = useState([] as RecipeCategory[])
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        API.getRecipes().then((recipes) => setRecipes(recipes));
        API.getRecipeCategories().then((category) => setRecipeCategory(category));
    }, [])

    const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    }

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
                    <select onChange={onCategoryChange}>
                        <option value="" hidden={true}>Category Selection</option>
                        {categoryLayout(recipeCategory)}
                    </select>
                    <input id='search' placeholder="Search"/>
                </div>
                <div className='recipe-grid'>
                    {recipeLayout(recipes, selectedCategory)}
                </div>
                <div className='see-more'>
                    <button className='red-button'>See More</button>
                </div>
            </div>
            <Grass/>
        </div>
    )
}

export default RecipePage;