import {Link} from "react-router-dom";
import React from "react";
import {Recipe} from "../Structs/DataTypes";
import individualRecipe from "../Pages/IndividualRecipe/IndividualRecipe";

const recipeLayout = (individualRecipe: Recipe[], filter: string, searchText: string) => {
    return individualRecipe.filter((recipe) => {
        return (recipe.category_id.toString() === filter || (filter === "")) && ((recipe?.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) || !searchText) || ((recipe.recipeCategory?.name!).toLowerCase()
            .includes(searchText.toLowerCase())));
    }).map((recipe) => {
            return (
                <div className='grid-content'>
                    <Link to={`/individual-recipe/${recipe.id}`}><img src={recipe.thumbnail} alt={recipe.name + "Thumbnail"}/></Link>
                    <p className='name'>{recipe.name}</p>
                    <p className='category'>{recipe.recipeCategory?.name}</p>
                </div>
            )
        }
    )
}

export default recipeLayout