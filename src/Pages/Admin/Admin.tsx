import './Admin.scss'
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import swings from "../../Assets/Swings.png";
import React, {useEffect, useState} from "react";
import {Exercise, ExerciseCategory, Recipe} from "../../Structs/DataTypes";
import API from "../../API";

const Admin = () => {

    const [recipes, setRecipes] = useState([] as Recipe[]);
    const [exercises, setExercises] = useState([] as Exercise[])
    const [recipe, setRecipe] = useState({} as Recipe)
    const [exercise, setExercise] = useState({} as Exercise)
    const [exerciseCategories, setExerciseCategories] = useState([] as ExerciseCategory[])

    useEffect(() => {
        API.getRecipes().then((recipes) => setRecipes(recipes));
        API.getExercises().then((exercises) => setExercises(exercises))
        API.getExerciseCategories().then((exerciseCategories) => setExerciseCategories(exerciseCategories))
    }, [])

    const loadExercise = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault()
        console.log(event.currentTarget.value)
        const index: number = parseInt(event.currentTarget.value, 10)
        console.log(exercises[index])

        setExercise(exercise => {
            return {...(exercises[index] as Exercise)}

        })
    }

    const saveExercise = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name", exercise.name)
        formData.append("videoLink", exercise.videoLink)
        formData.append("videoLink", exercise.videoLink)
        formData.append("category_id", String(exercise.category_id))
        if(exercise.id){
            await fetch(`http://127.0.0.1:3333/exercises/${exercise.id}`, {
                method: 'PUT',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    console.log(response);
                    alert("Bad response from server")
                } else {
                    window.alert("Exercise submitted!")
                    window.location.reload()
                    return response.json()
                }
            })
        }
        await fetch(`http://127.0.0.1:3333/exercises`, {
            method: 'POST',
            body: formData,
        }).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                console.log(response);
                alert("Bad response from server")
            } else {
                window.alert("Exercise submitted!")
                window.location.reload()
                return response.json()
            }
        })

    }


    return (
        <div className='admin'>
            <Weather/>
            <h1>Admin Panel</h1>
            <div className='content'>
                <div className="form-div">
                    <div>
                        <form className='exercise-form' onSubmit={saveExercise}>
                            <div className='add-edit'>
                                <h2>Add Exercise</h2>
                                <div className='edit-select'>
                                    <label>Edit Exercise</label>
                                    <select onChange={loadExercise}>
                                        <option value="select">Select Exercise</option>
                                        {exercises && exercises.map((exercise, index: number) => (
                                        <option value={index}>{exercise.name}</option>
                                    ))}</select>
                                </div>
                            </div>
                            <div className='field'>
                                <label>Name</label>
                                <input title={exercise?.name} value={exercise?.name ? String(exercise?.name) : ""} onChange={event => {
                                    setExercise((exercise) => {
                                        return {...exercise, name: event.target.value} as Exercise
                                    });

                                }}/>
                            </div>
                            <div className='field'>
                                <label>Video</label>
                                <input title={exercise?.videoLink} value={exercise?.videoLink ? String(exercise?.videoLink) : ""} onChange={event =>
                                {setExercise((exercise) => {
                                        return {...exercise, videoLink: event.target.value} as Exercise
                                    });

                                }}/>
                            </div>
                            <div className='field'>
                                <label>Category</label>
                                <select value={exercise.exerciseCategory?.name ? String(exercise.exerciseCategory.name) : ""} onChange={event => {event.preventDefault()
                                    setExercise(exercise => {
                                    return {...exercise, category_id: parseInt(event.target.value)} as Exercise
                                })}}>
                                    <option value="" disabled>Select Category</option>
                                    {exerciseCategories && exerciseCategories.map((category) => (
                                    <option value={category.id}>{category?.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='buttons'>
                                <button className='delete'>Delete Exercise</button>
                                <button className='save'>Save Exercise</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className='otd'>Of the Day</h2>
                        <form className='otd-form'>
                            <div className='field'>
                                <label>Recipe of the Day</label>
                                <select className='otd-select'></select>
                            </div>
                            <div className='field'>
                                <label>Exercise of the Day</label>
                                <select className='otd-select'></select>
                            </div>
                            <div className='otd-save'>
                                <button className='save'>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr/>
                <div className="form-div">
                    <form className='recipe-form'>
                        <div className='add-edit'>
                            <h2>Add Recipe</h2>
                            <div className='edit-select'>
                                <label>Edit Recipe</label>
                                <select>{recipes && recipes.map((recipe) => (
                                    <option onClick={e =>  setRecipe(recipe)}>{recipe.name}</option>
                                ))}</select>
                            </div>
                        </div>
                        <div className='field'>
                            <label>Name</label>
                            <input/>
                        </div>
                        <div className='field'>
                            <label>Thumbnail</label>
                            <input/>
                        </div>
                        <div className='field'>
                            <label>Category</label>
                            <select></select>
                        </div>
                        <div className='field'>
                            <label>Cook Time</label>
                            <input/>
                        </div>
                        <div className='field'>
                            <label>Ingredients</label>
                            <textarea placeholder="1. Ingredient&#10;2. Ingredient&#10;3. Ingredient"/>
                        </div>
                        <div className='field'>
                            <label>Recipe Steps</label>
                            <textarea placeholder="1. Step&#10;2. Step&#10;3. Step"/>
                        </div>
                        <div className='buttons'>
                            <button className='delete'>Delete Recipe</button>
                            <button className='save'>Save Recipe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='swings'>
                <img src={swings} alt={"Henry and Jasmine on Swings"}/>
            </div>
            <Grass/>
        </div>
    )
}

export default Admin;