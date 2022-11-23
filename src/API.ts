import {Recipe, Exercise, RecipeCategory, ExerciseCategory, ExerciseLog} from "./Structs/DataTypes";

export const API_URL = "http://127.0.0.1:3333";

const getRecipes = async (): Promise<Recipe[]> => {
    return await fetch(`${API_URL}/recipes`)
        .then((response) => {
        if (response.ok) return response.json();
        return {
            errorCode: response.status,
            error: response.statusText,
        }
    }).then((response) => {
        return response.map((recipe: any) => {
            return {
                ...recipe
            } as Recipe
        });
    });
}

const getExercises = async (): Promise<Exercise[]> => {
    return await fetch(`${API_URL}/exercises`)
        .then((response) => {
            if (response.ok) return response.json();
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        }).then((response) => {
            return response.map((exercise: any) => {
                return {
                    ...exercise
                } as Exercise
            });
        });
}

const getExerciseCategories = async (): Promise<ExerciseCategory[]> => {
    return await fetch(`${API_URL}/exerciseCategories`)
        .then((response) => {
            if (response.ok) return response.json();
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        }).then((response) => {
            return response.map((exerciseCategory: any) => {
                return {
                    ...exerciseCategory
                } as ExerciseCategory
            });
        });
}

const getRecipeCategories = async (): Promise<RecipeCategory[]> => {
    return await fetch(`${API_URL}/recipeCategories`)
        .then((response) => {
            if (response.ok) return response.json();
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        }).then((response) => {
            return response.map((recipeCategory: any) => {
                return {
                    ...recipeCategory
                } as RecipeCategory
            });
        });
}

const getFeaturedRecipe = async (): Promise<Recipe> => {
    return await fetch(`${API_URL}/featuredRecipe`)
        .then((response) => {
            if (response.ok) return response.json();
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        }).then((response) => {
            return response;
        });
}

const getFeaturedExercise = async (): Promise<Exercise> => {
    return await fetch(`${API_URL}/featuredExercise`)
        .then((response) => {
            if (response.ok) return response.json();
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        }).then((response) => {
            return response;
        });
}

const getExerciseLogs = async (): Promise<ExerciseLog[]> => {
    return await fetch(`${API_URL}/exerciseLogs`)
        .then((response) => {
            if (response.ok) return response.json();
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        }).then((response) => {
            return response.map((exerciseLog: any) => {
                return {
                    ...exerciseLog
                } as ExerciseLog
            });
        });
}

const isLoggedIn = (): boolean => {
    return sessionStorage.getItem('session_key') != null;
}

const API ={
    getRecipes,
    getExercises,
    getRecipeCategories,
    getExerciseCategories,
    getFeaturedRecipe,
    getFeaturedExercise,
    isLoggedIn,
    API_URL,
    getExerciseLogs
}

export default API;