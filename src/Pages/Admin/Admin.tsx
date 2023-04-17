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
import {Link} from "react-router-dom";
import BackArrow from "../../Components/BackArrow/BackArrow";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Multiselect} from "multiselect-react-dropdown";

const Admin = () => {
    const [recipes, setRecipes] = useState([] as Recipe[]);
    const [exercises, setExercises] = useState([] as Exercise[])
    const [diagrams, setDiagrams] = useState([] as Diagram[])
    const [diagram, setDiagram] = useState({} as Diagram)
    const [demos, setDemos] = useState([] as Demonstration[])
    const [demo, setDemo] = useState({} as Demonstration)
    const [recipe, setRecipe] = useState({} as Recipe)
    const [exercise, setExercise] = useState({} as Exercise)
    const [selectedExerciseCategories, setSelectedExerciseCategories] = useState([] as ExerciseCategory[])
    const [exerciseCategories, setExerciseCategories] = useState([] as ExerciseCategory[])
    const [selectedRecipeCategories, setSelectedRecipeCategories] = useState([] as RecipeCategory[])
    const [recipeCategories, setRecipeCategories] = useState([] as RecipeCategory[])
    const [selectedDemoCategories, setSelectedDemoCategories] = useState([] as DemonstrationCategory[])
    const [demonstrationCategories, setDemonstrationCategories] = useState([] as DemonstrationCategory[])
    const [currentFeaturedExercise, setCurrentFeaturedExercise] = useState({} as Exercise)
    const [currentFeaturedRecipe, setCurrentFeaturedRecipe] = useState({} as Recipe)
    const [newFeaturedExercise, setNewFeaturedExercise] = useState({} as Exercise)
    const [newFeaturedRecipe, setNewFeaturedRecipe] = useState({} as Recipe)
    const [newCategoryType, setNewCategoryType] = useState("")
    const [newCategoryName, setNewCategoryName] = useState("")
    const [deleteCategoryID, setDeleteCategoryID] = useState("")
    const [deleteCategoryType, setDeleteCategoryType] = useState("")
    const [deleteCategoryValues, setDeleteCategoryValues] = useState([] as any[]);

    useEffect(() => {
        API.getRecipes().then((recipes) => setRecipes(recipes));
        API.getExercises().then((exercises) => setExercises(exercises))
        API.getDiagrams().then((diagrams) => setDiagrams(diagrams))
        API.getDemonstrations().then((demos) => setDemos(demos))
        API.getExerciseCategories().then((exerciseCategories) => setExerciseCategories(exerciseCategories))
        API.getRecipeCategories().then((recipeCategories) => setRecipeCategories(recipeCategories))
        API.getDemonstrationCategories().then((demonstrationCategories) => setDemonstrationCategories(demonstrationCategories))
        API.getFeaturedExercise().then((exercise) => setCurrentFeaturedExercise(exercise))
        API.getFeaturedRecipe().then((recipe) => setCurrentFeaturedRecipe(recipe))
    }, [])

    const loadDiagram = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault()
        const index: number = parseInt(event.currentTarget.value, 10)
        setDiagram(diagram => {
            return {...(diagrams[index] as Diagram)}
        })
    }

    const saveDiagram = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("thumbnail_link", diagram.thumbnail_link)
        formData.append("name", diagram.name)
        if (diagram.id) {
            await fetch(`${API_URL}/diagrams/${diagram.id}`, {
                method: 'PUT',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    window.alert("Diagram submitted!")
                    window.location.reload()
                    return response.json()
                }
            })
        } else {
            await fetch(`${API_URL}/diagrams`, {
                method: 'POST',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    window.alert("Diagram submitted!")
                    window.location.reload()
                    return response.json()
                }
            })
        }
    }

    const deleteDiagram = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            await fetch(`${API_URL}/diagrams/${diagram.id}`, {
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

    const loadDemonstration = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault()
        const index: number = parseInt(event.currentTarget.value, 10)
        setDemo(demo => {
            return {...(demos[index] as Demonstration)}

        })
        setSelectedDemoCategories((demos[index].demoCategories as DemonstrationCategory[]))
    }

    const saveDemonstration = async (event: React.FormEvent<HTMLFormElement>) => {
        const catIDS = selectedDemoCategories.map((category) => {return category.id})
        event.preventDefault()
        const thumbnail = await fetch(`https://noembed.com/embed?dataType=json&url=` + demo.video_link).then((response) => {
            return response.json()
        })
        const formData = new FormData()
        formData.append("name", demo.name)
        formData.append("video_link", API.parseEmbedLink(demo.video_link))
        formData.append("thumbnail_link", thumbnail.thumbnail_url)
        if (demo.id) {
            await fetch(`${API_URL}/demos/${demo.id}`, {
                method: 'PUT',
                body: formData,
            }).then(async (response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    await fetch(`${API_URL}/setDemoCategories/${demo.id}`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(catIDS),
                    }).then((response) => {
                        if (response.status >= 400 && response.status < 600) {
                            alert("Bad response from server")
                        } else {
                            window.alert("Demonstration submitted!")
                            window.location.reload()
                            return response.json()
                        }
                    })
                }
            })
        } else {
            await fetch(`${API_URL}/demos`, {
                method: 'POST',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    return response.json()
                }
            }).then(async (response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    await fetch(`${API_URL}/setDemoCategories/${response.id}`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(catIDS),
                    }).then((response) => {
                        if (response.status >= 400 && response.status < 600) {
                            alert("Bad response from server")
                        } else {
                            window.alert("Demo submitted!")
                            window.location.reload()
                            return response.json()
                        }
                    })
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
        const index: number = parseInt(event.currentTarget.value, 10)
        setExercise(exercise => {
            return {...(exercises[index] as Exercise)}

        })
        setSelectedExerciseCategories((exercises[index].exerciseCategories as ExerciseCategory[]))
    }

    const saveExercise = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const thumbnail = await fetch(`https://noembed.com/embed?dataType=json&url=` + exercise.video_link).then((response) => {
            return response.json()
        })
        const catIDS = selectedExerciseCategories.map((category) => {return category.id})
        const formData = new FormData()
        formData.append("name", exercise.name)
        formData.append("video_link", API.parseEmbedLink(exercise.video_link))
        formData.append("thumbnail_link", thumbnail.thumbnail_url)
        if (exercise.is_featured) {
            formData.append("is_featured", String(exercise.is_featured))
        } else {
            formData.append("is_featured", String(false))
        }
        if (exercise.id) {
            await fetch(`${API_URL}/exercises/${exercise.id}`, {
                method: 'PUT',
                body: formData,
            }).then(async (response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    await fetch(`${API_URL}/setExerciseCategories/${exercise.id}`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(catIDS),
                    }).then((response) => {
                        if (response.status >= 400 && response.status < 600) {
                            alert("Bad response from server")
                        }
                        else {
                            window.alert("Exercise submitted!")
                            window.location.reload()
                            return response.json()
                        }
                    })
                }
            })
        } else {
            await fetch(`${API_URL}/exercises`, {
                method: 'POST',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    return response.json()
                }
            }).then(async (response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    await fetch(`${API_URL}/setExerciseCategories/${response.id}`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(catIDS),
                    }).then((response) => {
                        if (response.status >= 400 && response.status < 600) {
                            alert("Bad response from server")
                        } else {
                            window.alert("Exercise submitted!")
                            window.location.reload()
                            return response.json()
                        }
                    })
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
    const setDeleteCategory = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setDeleteCategoryID(event.currentTarget.value);
    }
    const loadRecipe = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault()
        const index: number = parseInt(event.currentTarget.value, 10)

        setRecipe(recipe => {
            return {...(recipes[index] as Recipe)}

        })
        setSelectedRecipeCategories((recipes[index].recipeCategories as RecipeCategory[]))
    }
    const saveRecipe = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const catIDS = selectedRecipeCategories.map((category) => {return category.id})
        const formData = new FormData()
        formData.append("name", recipe.name)
        formData.append("thumbnail", recipe.thumbnail)
        formData.append("cook_time", recipe.cook_time)
        formData.append("ingredients", recipe.ingredients)
        formData.append("recipe_steps", recipe.recipe_steps)
        formData.append("prep_time", recipe.prep_time)
        if (recipe.is_featured) {
            formData.append("is_featured", String(exercise.is_featured))
        } else {
            formData.append("is_featured", String(false))
        }
        if (recipe.id) {
            await fetch(`${API_URL}/recipes/${recipe.id}`, {
                method: 'PUT',
                body: formData,
            }).then(async (response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    await fetch(`${API_URL}/setRecipeCategories/${recipe.id}`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(catIDS),
                    }).then((response) => {
                        if (response.status >= 400 && response.status < 600) {
                            alert("Bad response from server")
                        } else {
                            window.alert("Recipe submitted!")
                            window.location.reload()
                            return response.json()
                        }
                    })
                }
            })
        } else {
            await fetch(`${API_URL}/recipes`, {
                method: 'POST',
                body: formData,
            }).then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    return response.json()
                }
            }).then(async (response) => {
                if (response.status >= 400 && response.status < 600) {
                    alert("Bad response from server")
                } else {
                    await fetch(`${API_URL}/setRecipeCategories/${response.id}`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(catIDS),
                    }).then((response) => {
                        if (response.status >= 400 && response.status < 600) {
                            alert("Bad response from server")
                        } else {
                            window.alert("Recipe submitted!")
                            window.location.reload()
                            return response.json()
                        }
                    })
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
    const saveFeatured = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (currentFeaturedRecipe) {
            await API.swapFeaturedRecipe(currentFeaturedRecipe.id.toString()).then(() => {
                alert("Featured Recipe Updated")
            })
        }
        if (currentFeaturedExercise) {
            await API.swapFeaturedExercise(currentFeaturedExercise.id.toString()).then(() => {
                alert("Featured Exercise Updated")
            })
        }
        window.location.reload()
    }
    const addCategory = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", newCategoryName)
        await fetch(`${API_URL}/${newCategoryType}`, {
            method: 'POST',
            body: formData
        }).then((res) => {
            if (res.status >= 400 && res.status < 600) {
                alert("Bad response from server")
            } else {
                alert("New Category Added")
                window.location.reload()
                return res.json()
            }
        })
    }
    const deleteCategory = async (e: {preventDefault:()=>void;}) => {
        e.preventDefault();
        if (deleteCategoryID === "select" || !deleteCategoryID) {
            window.alert("Please select a category");
            return;
        }
        await fetch(`${API_URL}/${deleteCategoryType}/${deleteCategoryID}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.status >= 400 && res.status < 600) {
                alert("Bad response from server")
            } else {
                alert(`Category deleted`);
                window.location.reload()
                return res.json()
            }
        })
    }

    // @ts-ignore
    return (
        <div className='admin'>
            <HelmetProvider>
                <Helmet>
                    <title>Admin</title>
                </Helmet>
            </HelmetProvider>
            <Weather/>
            <BackArrow route="/"/>
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
                                <input placeholder="Exercise Name" title={exercise?.name}
                                       value={exercise?.name ? String(exercise?.name) : ""}
                                       onChange={event => {
                                           setExercise((exercise) => {
                                               return {...exercise, name: event.target.value} as Exercise
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Video Link</label>
                                <input placeholder="https://www.youtube.com/watch?v=00000000"
                                       title={exercise?.video_link}
                                       value={exercise?.video_link ? String(exercise?.video_link) : ""}
                                       onChange={event => {
                                           setExercise((exercise) => {
                                               return {...exercise, video_link: event.target.value} as Exercise
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Category</label>
                                <Multiselect
                                             onKeyPressFn={function noRefCheck(){}}
                                             onRemove={(selectedList) => {
                                                 setSelectedExerciseCategories(selectedList)
                                             }}
                                             onSearch={function noRefCheck(){}}
                                             onSelect={(selectedList) => {
                                                 setSelectedExerciseCategories(selectedList)
                                             }}
                                             selectedValues={selectedExerciseCategories}
                                             placeholder={"Select Categories"}
                                             options={exerciseCategories}
                                             displayValue="name"/>
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
                                <input placeholder="Demonstration Name" title={demo?.name}
                                       value={demo?.name ? String(demo?.name) : ""}
                                       onChange={event => {
                                           setDemo((demo) => {
                                               return {...demo, name: event.target.value} as Demonstration
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Video Link</label>
                                <input placeholder="https://www.youtube.com/watch?v=00000000" title={demo?.video_link}
                                       value={demo?.video_link ? String(demo?.video_link) : ""}
                                       onChange={event => {
                                           setDemo((demo) => {
                                               return {...demo, video_link: event.target.value} as Demonstration
                                           });

                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Category</label>
                                <Multiselect
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={(selectedList) => {
                                        setSelectedDemoCategories(selectedList)
                                    }}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={(selectedList) => {
                                        setSelectedDemoCategories(selectedList)
                                    }}
                                    selectedValues={selectedDemoCategories}
                                    placeholder={"Select Categories"}
                                    options={demonstrationCategories}
                                    displayValue="name"/>
                            </div>
                            <div className='buttons'>
                                <button className='delete' onClick={deleteDemonstration}>Delete Demo</button>
                                <button className='save'>Save Demo</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <form className='add-category-form'>
                            <div className='field'>
                                <label>Add Category</label>
                                <div className='add-categories'>
                                    <select className='add-category-for' onChange={(e) => {
                                        setNewCategoryType(e.target.value)
                                    }}>
                                        <option value=" ">Add Category To</option>
                                        <option value={"demoCategories"}>Demonstrations</option>
                                        <option value={"exerciseCategories"}>Exercises</option>
                                        <option value={"recipeCategories"}>Recipes</option>
                                    </select>
                                    <input className='add-category' placeholder="Category Name" onChange={(e) => {
                                        setNewCategoryName(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='otd-save'>
                                <button className='save' onClick={addCategory}>Save Category</button>
                            </div>
                        </form>
                        <form className='add-category-form'>
                            <div className='field'>
                                <label>Delete Category</label>
                                <div className='add-categories'>
                                    <select className='add-category-for' onChange={(e) => {
                                        switch (e.target.value) {
                                            case "demoCategories": setDeleteCategoryValues(demonstrationCategories); break;
                                            case "exerciseCategories": setDeleteCategoryValues(exerciseCategories); break;
                                            case "recipeCategories": setDeleteCategoryValues(recipeCategories); break;
                                        }; setDeleteCategoryType(e.target.value);
                                    }}>
                                        <option value=" " disabled selected>Delete Category From</option>
                                        <option value={"demoCategories"}>Demonstrations</option>
                                        <option value={"exerciseCategories"}>Exercises</option>
                                        <option value={"recipeCategories"}>Recipes</option>
                                    </select>
                                    <select onChange={setDeleteCategory} className='delete-category'>
                                        <option value="select" disabled selected>Select Category</option>
                                        {deleteCategoryValues && deleteCategoryValues.map((category) => (
                                            <option value={category.id}>{category.name}</option>
                                        ))}</select>
                                </div>
                            </div>
                            <div className='otd-save'>
                                <button className='delete' onClick={deleteCategory}>Delete Category</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className='otd'>Of the Day</h2>
                        <form className='otd-form'>
                            <div className='field'>
                                <label>Recipe of the Day</label>
                                <select className='otd-select' onChange={event => {
                                    event.preventDefault()
                                    setCurrentFeaturedRecipe(recipe => {
                                        return {...(recipes[parseInt(event.target.value, 10)] as Recipe)}

                                    })
                                }}>
                                    <option value="select">Select Featured Recipe</option>
                                    {recipes && recipes.map((recipe, index: number) => (
                                        <option value={index}
                                                selected={recipe.id == currentFeaturedRecipe.id}>{recipe.name}</option>
                                    ))}</select>
                            </div>
                            <div className='field'>
                                <label>Exercise of the Day</label>
                                <select className='otd-select' onChange={event => {
                                    event.preventDefault()

                                    setCurrentFeaturedExercise(exercise => {
                                        return {...(exercises[parseInt(event.target.value, 10)] as Exercise)}
                                    })
                                }}>
                                    <option value="select">Select Featured Exercise</option>
                                    {exercises && exercises.map((exercise, index: number) => (
                                        <option value={index}
                                                selected={exercise.id == currentFeaturedExercise.id}>{exercise.name}</option>
                                    ))}</select>
                            </div>
                            <div className='otd-save'>
                                <button className='save' onClick={saveFeatured}>Save Changes</button>
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
                                <input placeholder="Recipe Name" title={recipe?.name}
                                       value={recipe?.name ? String(recipe?.name) : ""}
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
                                <Multiselect
                                    className={"multiSelect"}
                                    onKeyPressFn={function noRefCheck(){}}
                                    onRemove={(selectedList) => {
                                        setSelectedRecipeCategories(selectedList)
                                    }}
                                    onSearch={function noRefCheck(){}}
                                    onSelect={(selectedList) => {
                                        setSelectedRecipeCategories(selectedList)
                                    }}
                                    selectedValues={selectedRecipeCategories}
                                    placeholder={"Select Categories"}
                                    options={recipeCategories}
                                    displayValue="name"/>
                            </div>
                            <div className='field'>
                                <label>Prep Time</label>
                                <input placeholder="000 Minutes" defaultValue={recipe?.prep_time}
                                       value={recipe?.prep_time ? String(recipe?.prep_time) : ""} onChange={event => {
                                    setRecipe((recipe) => {
                                        return {...recipe, prep_time: event.target.value} as Recipe
                                    });

                                }}/>
                            </div>
                            <div className='field'>
                                <label>Cook Time</label>
                                <input placeholder="000 Minutes" defaultValue={recipe?.cook_time}
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
                        <form className='diagram-form' onSubmit={saveDiagram}>
                            <div className='add-edit'>
                                <h2>Add Diagram</h2>
                                <div className='edit-select'>
                                    <label>Edit Diagram</label>
                                    <select onChange={loadDiagram}>
                                        <option value="select">Select Diagram</option>
                                        {diagrams && diagrams.map((diagram, index: number) => (
                                            <option value={index}>{diagram.name}</option>
                                        ))}</select>
                                </div>
                            </div>
                            <div className='field'>
                                <label>Name</label>
                                <input placeholder="Diagram Name" title={diagram.name}
                                       value={diagram?.name ? diagram.name : ""}
                                       onChange={event => {
                                           setDiagram((diagram) => {
                                               return {...diagram, name: event.target.value} as Diagram
                                           })
                                       }}/>
                            </div>
                            <div className='field'>
                                <label>Thumbnail Link</label>
                                <input title={diagram.thumbnail_link}
                                       value={diagram?.thumbnail_link ? String(diagram?.thumbnail_link) : ""}
                                       onChange={event => {
                                           setDiagram((diagram) => {
                                               return {...diagram, thumbnail_link: event.target.value} as Diagram
                                           });

                                       }}/>
                            </div>
                            <div className='buttons'>
                                <button className='delete' onClick={deleteDiagram}>Delete Diagram</button>
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