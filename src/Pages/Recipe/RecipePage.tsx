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
    const [searchText, setSearchText] = useState("")
    const [noMoreRecipes, setNoMoreRecipes] = useState(false)
    const [page, setPage] = useState(2)
    const [featuredRecipe, setFeaturedRecipe] = useState<Recipe>();

    useEffect(() => {
        API.getPaginatedRecipes(String(1)).then((response) => setRecipes(response.data));
        API.getPaginatedRecipes(String(page)).then((response) => {
            if(response.data.length == 0){
                setNoMoreRecipes(true)
            }
        })
        API.getRecipeCategories().then((category) => setRecipeCategory(category));
        API.getFeaturedRecipe().then((recipe) => setFeaturedRecipe(recipe));
    }, [])

    const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    }

    const getMoreRecipes = () => {
        API.getPaginatedRecipes(String(page)).then((response) => setRecipes(recipes.concat(response.data)));
        API.getPaginatedRecipes(String(page + 1)).then((response) => {
            if(response.data.length == 0){
                setNoMoreRecipes(true)
            }
        })
        console.log(recipes)
        setPage(page + 1)
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
                    <img src={featuredRecipe?.thumbnail} alt={"OTD Thumbnail"}/>
                </div>
                <div className='otd-text'>
                    <h2>Recipe of the Day</h2>
                    <p>{featuredRecipe?.name}</p>
                </div>
            </div>
            <div className='recipe-content'>
                <div className='select-search'>
                    <select onChange={onCategoryChange}>
                        <option value="">All</option>
                        {categoryLayout(recipeCategory)}
                    </select>
                    <input id='search' placeholder="Search" onChange={(event) => {setSearchText(event.target.value)}}/>
                </div>
                <div className='recipe-grid'>
                    {recipeLayout(recipes, selectedCategory, searchText)}
                </div>
                {!noMoreRecipes &&
                <div className='see-more'>
                    <button className='red-button' onClick={getMoreRecipes}>See More</button>
                </div>
                }
            </div>
            <Grass/>
        </div>
    )
}

export default RecipePage;