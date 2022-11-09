import './IndividualRecipe.scss';
import React, {useEffect, useState} from "react";
import recipeStock from '../../Assets/recipeStock.jpg';
import {Helmet, HelmetProvider} from "react-helmet-async";
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import BackArrow from "../../Components/BackArrow/BackArrow";
import {Recipe} from "../../Structs/DataTypes";
import {useParams} from "react-router-dom";


const IndividualRecipe = () => {
    const [recipe, setRecipe] = useState<Recipe>()
    const id = useParams();
    useEffect( () => {
        const getRecipe = async() => {
            const recipeFromServer = await fetch(`http://127.0.0.1:3333/recipes/${id.id}`)
            setRecipe(await recipeFromServer.json())
        }
        getRecipe()
    }, [])
    return (
        <div className="individual-recipe">
            <HelmetProvider>
                <Helmet>
                    <title>{recipe?.name}</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <BackArrow route="/recipes"/>
            <div className='otd-div'>
                <div className='otd-image'>
                    <img src={recipe?.thumbnail} alt='RecipePage Name'/>
                </div>
                <div className='otd-text'>
                    <h2>{recipe?.name}</h2>
                    <p>{recipe?.cook_time}</p>
                </div>
            </div>
            <div className='recipe-text'>
                <p>
                    Ingredients: {recipe?.ingredients}
                </p>
                <p>
                    Steps: {recipe?.recipe_steps}
                </p>
            </div>
            <Grass/>
        </div>
    )
}

export default IndividualRecipe;