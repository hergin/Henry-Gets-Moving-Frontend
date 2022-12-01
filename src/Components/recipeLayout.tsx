import {Link} from "react-router-dom";
import React from "react";
import {Recipe} from "../Structs/DataTypes";
import individualRecipe from "../Pages/IndividualRecipe/IndividualRecipe";

const recipeLayout = (individualRecipe: Recipe[], filter: string) => {
    return individualRecipe.filter((recipe) => {
        if (filter === "") return true;
        return recipe.category_id.toString() === filter;
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