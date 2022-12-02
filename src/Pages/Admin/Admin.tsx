import './Admin.scss'
import Weather from "../../Components/Weather";
import Grass from "../../Components/Grass";
import swings from "../../Assets/Swings.png";
import React, {useEffect, useState} from "react";
import {
    Demonstration,
    DemonstrationCategory,
    Diagram,
    Exercise,
    ExerciseCategory,
    Recipe,
    RecipeCategory
} from "../../Structs/DataTypes";
import API from "../../API";
import {API_URL} from "../../API";

const Admin = () => {

    const [recipes, setRecipes] = useState([] as Recipe[]);
    const [exercises, setExercises] = useState([] as Exercise[])
    const [diagrams, setDiagrams] = useState([] as Diagram[])
    const [diagram, setDiagram] = useState({} as Diagram)
    const [demos, setDemos] = useState([] as Demonstration[])
    const [demo, setDemo] = useState({} as Demonstration)
    const [recipe, setRecipe] = useState({} as Recipe)
    const [exercise, setExercise] = useState({} as Exercise)
    const [exerciseCategory, setExerciseCategory] = useState({} as ExerciseCategory)
    const [exerciseCategories, setExerciseCategories] = useState([] as ExerciseCategory[])
    const [recipeCategory, setRecipeCategory] = useState({} as RecipeCategory)
    const [recipeCategories, setRecipeCategories] = useState([] as RecipeCategory[])
    const [demonstrationCategory, setDemonstrationCategory] = useState({} as DemonstrationCategory)
    const [demonstrationCategories, setDemonstrationCategories] = useState([] as DemonstrationCategory[])

    useEffect(() => {
        API.getRecipes().then((recipes) => setRecipes(recipes));
        API.getExercises().then((exercises) => setExercises(exercises))
        API.getDiagrams().then((diagrams) => setDiagrams(diagrams))
        API.getDemonstrations().then((demos) => setDemos(demos))
        API.getExerciseCategories().then((exerciseCategories) => setExerciseCategories(exerciseCategories))
        API.getRecipeCategories().then((recipeCategories) => setRecipeCategories(recipeCategories))
        API.getDemonstrationCategories().then((demonstrationCategories) => setDemonstrationCategories(demonstrationCategories))
    }, [])

    const loadDiagram = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault()
        console.log(event.currentTarget.value)
        const index: number = parseInt(event.currentTarget.value, 10)
        console.log(diagrams[index])

        setDiagram(diagram => {
            return {...(diagrams[index] as Diagram)}
        })
    }

    const loadDemonstration = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault()
        console.log(event.currentTarget.value)
        const index: number = parseInt(event.currentTarget.value, 10)
        console.log(demos[index])

        setDemo(demo => {
            return {...(demos[index] as Demonstration)}

        })
        setDemonstrationCategory((demos[index].demonstrationCategory as DemonstrationCategory))
    }

    const saveDemonstration = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name", demo.name)
        formData.append("video_link", demo.video_link)
        formData.append("thumbnail_link", demo.thumbnail_link)
        formData.append("demonstration_category_id", String(demo.demonstrationCategory?.id))
        if (demo.id) {
            await fetch(`${API_URL}/demos/${demo.id}`, {
                method: 'PUT',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    console.log(response);
                    alert("Bad response from server")
                } else {
                    window.alert("Demonstration submitted!")
                    window.location.reload()
                    return response.json()
                }
            })
        } else {
            await fetch(`${API_URL}/demos`, {
                method: 'POST',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    console.log(response);
                    alert("Bad response from server")
                } else {
                    window.alert("Demonstration submitted!")
                    window.location.reload()
                    return response.json()
                }
            })
        }
    }

    const deleteDemonstration = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            await fetch(`${API_URL}/demos/${demo.id}`, {
                method: 'DELETE',
            }).then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    alert("Bad response from server")
                } else {
                    window.location.reload()
                    return res.json()
                }
            })
        }
    }

    const loadExercise = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault()
        console.log(event.currentTarget.value)
        const index: number = parseInt(event.currentTarget.value, 10)
        console.log(exercises[index])

        setExercise(exercise => {
            return {...(exercises[index] as Exercise)}

        })
        setExerciseCategory((exercises[index].exerciseCategory as ExerciseCategory))
    }

    const saveExercise = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name", exercise.name)
        formData.append("video_link", exercise.video_link)
        formData.append("thumbnail_link", exercise.thumbnail_link)
        formData.append("category_id", String(exercise.category_id))
        if (exercise.is_featured) {
            formData.append("is_featured", String(exercise.is_featured))
        } else {
            formData.append("is_featured", String(false))
        }
        if (exercise.id) {
            await fetch(`${API_URL}/exercises/${exercise.id}`, {
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
        } else {
            await fetch(`${API_URL}/exercises`, {
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
    }

    const deleteExercise = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            await fetch(`${API_URL}/exercises/${exercise.id}`, {
                method: 'DELETE',
            }).then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    alert("Bad response from server")
                } else {
                    window.location.reload()
                    return res.json()
                }
            })
        }
    }

    const loadRecipe = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault()
        console.log(event.currentTarget.value)
        const index: number = parseInt(event.currentTarget.value, 10)
        console.log(recipes[index])

        setRecipe(recipe => {
            return {...(recipes[index] as Recipe)}

        })
        setRecipeCategory((recipes[index].recipeCategory as RecipeCategory))
    }
    const saveRecipe = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name", recipe.name)
        formData.append("thumbnail", recipe.thumbnail)
        formData.append("cook_time", recipe.cook_time)
        formData.append("ingredients", recipe.ingredients)
        formData.append("recipe_steps", recipe.recipe_steps)
        formData.append("category_id", String(recipe.category_id))
        if (recipe.is_featured) {
            formData.append("is_featured", String(exercise.is_featured))
        } else {
            formData.append("is_featured", String(false))
        }
        if (recipe.id) {
            await fetch(`${API_URL}/recipes/${recipe.id}`, {
                method: 'PUT',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    console.log(response);
                    alert("Bad response from server")
                } else {
                    window.alert("Recipe submitted!")
                    window.location.reload()
                    return response.json()
                }
            })
        } else {
            await fetch(`${API_URL}/recipes`, {
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
    }
    const deleteRecipe = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            await fetch(`${API_URL}/recipes/${recipe.id}`, {
                method: 'DELETE',
            }).then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    alert("Bad response from server")
                } else {
                    window.location.reload()
                    return res.json()
                }
            })
        }
    }


    return (
        <div className='admin'>
            <Weather/>
            <h1>Admin Panel</h1>
            <div className='content'>
                <div className="form-div">
                    <div>
                        <form className='exercise-form form' onSubmit={saveExercise}>
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
                                <input title={exercise?.name} value={exercise?.name ? String(exercise?.name) : ""}
                                       onChange={event => {
                                           setExercise((exercise) => {
                                               return {...exercise, name: event.target.value} as Exercise
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Thumbnail Link</label>
                                <input title={exercise.thumbnail_link}
                                       value={exercise?.thumbnail_link ? String(exercise?.thumbnail_link) : ""}
                                       onChange={event => {
                                           setExercise((exercise) => {
                                               return {...exercise, thumbnail_link: event.target.value} as Exercise
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Embed Video Link</label>
                                <input title={exercise?.video_link}
                                       value={exercise?.video_link ? String(exercise?.video_link) : ""}
                                       onChange={event => {
                                           setExercise((exercise) => {
                                               return {...exercise, video_link: event.target.value} as Exercise
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Category</label>
                                <select
                                    defaultValue={""}
                                    onChange={event => {
                                        event.preventDefault()
                                        setExercise(exercise => {
                                            return {
                                                ...exercise,
                                                category_id: parseInt(event.target.value)
                                            } as Exercise
                                        })
                                    }}>
                                    <option value="" disabled>Select Category</option>
                                    {exerciseCategories && exerciseCategories.map((category) => (
                                        <option selected={category.id == exercise.category_id}
                                                value={category.id}>{category?.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='buttons'>
                                <button className='delete' onClick={deleteExercise}>Delete Exercise</button>
                                <button className='save'>Save Exercise</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <form className='demo-form form' onSubmit={saveDemonstration}>
                            <div className='add-edit'>
                                <h2>Add Demonstration</h2>
                                <div className='edit-select'>
                                    <label>Edit Demo</label>
                                    <select onChange={loadDemonstration}>
                                        <option value="select">Select Demo</option>
                                        {demos && demos.map((demo, index: number) => (
                                            <option value={index}>{demo.name}</option>
                                        ))}</select>
                                </div>
                            </div>
                            <div className='field'>
                                <label>Name</label>
                                <input title={demo?.name} value={demo?.name ? String(demo?.name) : ""}
                                       onChange={event => {
                                           setDemo((demo) => {
                                               return {...demo, name: event.target.value} as Demonstration
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Thumbnail Link</label>
                                <input title={demo.thumbnail_link}
                                       value={demo?.thumbnail_link ? String(demo?.thumbnail_link) : ""}
                                       onChange={event => {
                                           setDemo((demo) => {
                                               return {...demo, thumbnail_link: event.target.value} as Demonstration
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Embed Video Link</label>
                                <input title={demo?.video_link}
                                       value={demo?.video_link ? String(demo?.video_link) : ""}
                                       onChange={event => {
                                           setDemo((demo) => {
                                               return {...demo, video_link: event.target.value} as Demonstration
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Category</label>
                                <select
                                    defaultValue={""}
                                    onChange={event => {
                                        event.preventDefault()
                                        setDemo(demo => {
                                            return {
                                                ...demo,
                                                category_id: parseInt(event.target.value)
                                            } as Demonstration
                                        })
                                    }}>
                                    <option value="" disabled>Select Category</option>
                                    {demonstrationCategories && demonstrationCategories.map((category) => (
                                        <option selected={category.id == demo.demonstrationCategory?.id}
                                                value={category.id}>{category?.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='buttons'>
                                <button className='delete' onClick={deleteDemonstration}>Delete Demo</button>
                                <button className='save'>Save Demo</button>
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
                    <div>
                        <form className='recipe-form form' onSubmit={saveRecipe}>
                            <div className='add-edit'>
                                <h2>Add Recipe</h2>
                                <div className='edit-select'>
                                    <label>Edit Recipe</label>
                                    <select onChange={loadRecipe}>
                                        <option value="select">Select Recipe</option>
                                        {recipes && recipes.map((recipe, index) => (
                                            <option value={index}>{recipe.name}</option>
                                        ))}</select>
                                </div>
                            </div>
                            <div className='field'>
                                <label>Name</label>
                                <input title={recipe?.name} value={recipe?.name ? String(recipe?.name) : ""}
                                       onChange={event => {
                                           setRecipe((recipe) => {
                                               return {...recipe, name: event.target.value} as Recipe
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Thumbnail Link</label>
                                <input title={recipe?.thumbnail}
                                       value={recipe?.thumbnail ? String(recipe?.thumbnail) : ""}
                                       onChange={event => {
                                           setRecipe((recipe) => {
                                               return {...recipe, thumbnail: event.target.value} as Recipe
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Category</label>
                                <select
                                    defaultValue={""}
                                    onChange={event => {
                                        event.preventDefault()
                                        setRecipe(recipe => {
                                            return {...recipe, category_id: parseInt(event.target.value)} as Recipe
                                        })
                                    }}>
                                    <option value="" disabled>Select Category</option>
                                    {recipeCategories && recipeCategories.map((category) => (
                                        <option selected={category.id == recipe.category_id}
                                                value={category.id}>{category?.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='field'>
                                <label>Cook Time</label>
                                <input defaultValue={recipe?.cook_time}
                                       value={recipe?.cook_time ? String(recipe?.cook_time) : ""} onChange={event => {
                                    setRecipe((recipe) => {
                                        return {...recipe, cook_time: event.target.value} as Recipe
                                    });

                                }}/>
                            </div>
                            <div className='field'>
                                <label>Ingredients</label>
                                <textarea placeholder="1. Ingredient&#10;2. Ingredient&#10;3. Ingredient"
                                          defaultValue={recipe?.ingredients}
                                          value={recipe?.ingredients ? String(recipe?.ingredients) : ""}
                                          onChange={event => {
                                              setRecipe((recipe) => {
                                                  return {...recipe, ingredients: event.target.value} as Recipe
                                              });

                                          }}/>
                            </div>
                            <div className='field'>
                                <label>Recipe Steps</label>
                                <textarea placeholder="1. Step&#10;2. Step&#10;3. Step"
                                          defaultValue={recipe?.recipe_steps}
                                          value={recipe?.recipe_steps ? String(recipe?.recipe_steps) : ""}
                                          onChange={event => {
                                              setRecipe((recipe) => {
                                                  return {...recipe, recipe_steps: event.target.value} as Recipe
                                              });

                                          }}/>
                            </div>
                            <div className='buttons'>
                                <button className='delete' onClick={deleteRecipe}>Delete Recipe</button>
                                <button className='save'>Save Recipe</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <form className='diagram-form'>
                            <div className='add-edit'>
                                <h2>Add Diagram</h2>
                                <div className='edit-select'>
                                    <label>Edit Diagram</label>
                                    <select onChange={loadDiagram}>
                                        <option value="select">Select Diagram</option>
                                        {diagrams && diagrams.map((diagram, index: number) => (
                                            <option value={index}>{diagram.id}</option>
                                        ))}</select>
                                </div>
                            </div>
                            <div className='field'>
                                <label>Thumbnail Link</label>
                                <input/>
                            </div>
                            <div className='buttons'>
                                <button className='delete'>Delete Diagram</button>
                                <button className='save'>Save Diagram</button>
                            </div>
                        </form>
                    </div>
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