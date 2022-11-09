import {Recipe, Exercise, RecipeCategory, ExerciseCategory} from "./Structs/DataTypes";

const getRecipes = async (): Promise<Recipe[]> => {
    return await fetch('http://127.0.0.1:3333/recipes')
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
    return await fetch('http://127.0.0.1:3333/exercises')
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
    return await fetch('http://127.0.0.1:3333/exerciseCategories')
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
    return await fetch('http://127.0.0.1:3333/recipeCategories')
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

const isLoggedIn = (): boolean => {
    return sessionStorage.getItem('session_key') != null;
}

const API ={
    getRecipes,
    getExercises,
    getRecipeCategories,
    getExerciseCategories
}

export default API;