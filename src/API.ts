import {Recipe, Exercise, RecipeCategory, ExerciseCategory} from "./Structs/DataTypes";
import exercise from "./Pages/Exercise/Exercise";

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