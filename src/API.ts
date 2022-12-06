import {
    Recipe,
    Exercise,
    RecipeCategory,
    ExerciseCategory,
    Demonstration,
    DemonstrationCategory,
    Diagram
} from "./Structs/DataTypes";

export const API_URL = "http://127.0.0.1:3333";

const getRecipes = async (): Promise<Recipe[]> => {
    return await fetch(`${API_URL}/recipes`)
        .then((response) => {
        return response.json();
    }).then((response) => {
        return response.map((recipe: any) => {
            return {
                ...recipe
            } as Recipe
        });
    }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}
const getPaginatedRecipes = async (page: String) => {
    return await fetch(`${API_URL}/paginatedRecipes`)
        .then((response) => {
            return response.json();
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getExercises = async (): Promise<Exercise[]> => {
    return await fetch(`${API_URL}/exercises`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((exercise: any) => {
                return {
                    ...exercise
                } as Exercise
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}
const getPaginatedExercises = async (page: String) => {
    return await fetch(`${API_URL}/paginatedExercises/?page=${page}`)
        .then((response) => {
            return response.json();
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getDemonstrations = async (): Promise<Demonstration[]> => {
    return await fetch(`${API_URL}/demos`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((demos: any) => {
                return {
                    ...demos
                } as Demonstration
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getDiagrams = async (): Promise<Diagram[]> => {
    return await fetch(`${API_URL}/diagrams`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((diagram: any) => {
                return {
                    ...diagram
                } as Diagram
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getExerciseCategories = async (): Promise<ExerciseCategory[]> => {
    return await fetch(`${API_URL}/exerciseCategories`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((exerciseCategory: any) => {
                return {
                    ...exerciseCategory
                } as ExerciseCategory
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getRecipeCategories = async (): Promise<RecipeCategory[]> => {
    return await fetch(`${API_URL}/recipeCategories`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((recipeCategory: any) => {
                return {
                    ...recipeCategory
                } as RecipeCategory
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}
const getDemonstrationCategories = async (): Promise<DemonstrationCategory[]> => {
    return await fetch(`${API_URL}/demoCategories`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((demoCategory: any) => {
                return {
                    ...demoCategory
                } as DemonstrationCategory
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getFeaturedRecipe = async (): Promise<Recipe> => {
    return await fetch(`${API_URL}/featuredRecipe`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getFeaturedExercise = async (): Promise<Exercise> => {
    return await fetch(`${API_URL}/featuredExercise`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const isLoggedIn = (): boolean => {
    return sessionStorage.getItem('session_key') != null;
}

const API ={
    getRecipes,
    getExercises,
    getPaginatedExercises,
    getPaginatedRecipes,
    getRecipeCategories,
    getDemonstrations,
    getDemonstrationCategories,
    getExerciseCategories,
    getFeaturedRecipe,
    getFeaturedExercise,
    getDiagrams,
    isLoggedIn,
    API_URL,
}

export default API;