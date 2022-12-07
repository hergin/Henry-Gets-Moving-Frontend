import { Demonstration, Diagram, Exercise, ExerciseCategory, FamilyMember, Recipe, RecipeCategory, User } from "../Structs/DataTypes";

let family_members = [
    {
        id: 1,
        name: "Bill",
        user_id: 1
    },
    {
        id: 2,
        name: "John",
        user_id: 1
    },
    {
        id: 3,
        name: "Kelly",
        user_id: 2
    },
    {
        id: 4,
        name: "Sandy",
        user_id: 2
    }
];
let exercise_logs = [
    {
        id: 1,
        type: "Yoga",
        intensity: "Vigorous",
        duration: 20,
        family_member_id: 1,
        family_member_name: "Bill",
        createdAt: new Date(2022, 10, 30, 0,0,0,0)
    },
    {
        id: 2,
        type: "Running",
        intensity: "Moderate",
        duration: 10,
        family_member_id: 1,
        family_member_name: "Bill",
        createdAt: new Date(2022, 10, 30, 0,0,0,0)
    },
    {
        id: 3,
        type: "Burpees",
        intensity: "Light",
        duration: 40,
        family_member_id: 2,
        family_member_name: "John",
        createdAt: new Date(2022, 10, 30, 0,0,0,0)
    }
];

const recipes: Recipe[] = [
    {
        id: 1,
        name: "Banana Bread",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F01%2FEasy-Banana-Bread_exps7423_TH.CW1973175D03_26_1b_RMS-1.jpg",
        cook_time: "20 years",
        ingredients: "Banana, Bread",
        recipe_steps: "Step 1: cook\nStep 2: eat",
        category_id: 1,
        is_featured: true
    },
    {
        id: 2,
        name: "Bread Bread",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F01%2FEasy-Banana-Bread_exps7423_TH.CW1973175D03_26_1b_RMS-1.jpg",
        cook_time: "20 millennia",
        ingredients: "Bread, Bread",
        recipe_steps: "Step 1: cook\nStep 2: DON'T eat",
        category_id: 1,
        is_featured: false
    },
    {
        id: 3,
        name: "Super Bread",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F01%2FEasy-Banana-Bread_exps7423_TH.CW1973175D03_26_1b_RMS-1.jpg",
        cook_time: "20 eternities",
        ingredients: "Superpowers, Bread",
        recipe_steps: "Step 1: create\nStep 2: LIVE",
        category_id: 2,
        is_featured: false
    },
    {
        id: 4,
        name: "Not Bread",
        thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F01%2FEasy-Banana-Bread_exps7423_TH.CW1973175D03_26_1b_RMS-1.jpg",
        cook_time: "20 picoseconds",
        ingredients: "Air",
        recipe_steps: "Breathe",
        category_id: 2,
        is_featured: false
    }
];

const recipe_categories = [
    {
        id: 1,
        name: "Various Breads"
    },
    {
        id: 2,
        name: "Various Maybe Breads"
    }
];

const exercise_categories = [
    {
        id: 1,
        name: "Ultra Gaming"
    },
    {
        id: 2,
        name: "Cardio"
    }
];

const exercises = [
    {
        id: 1,
        name: "Burpees",
        thumbnail_link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.verywellfit.com%2Fthmb%2FFA7LqmnXM77quHgCLvVZIYWkeFA%3D%2F2125x1416%2Ffilters%3Afill(FFDB5D%2C1)%2FGettyImages-598308041-5707ef713df78c7d9ea4f5ee.jpg",
        video_link: "https://www.youtube.com/embed/K6fCnO9TjG0",
        is_featured: true,
        category_id: 1
    },
    {
        id: 2,
        name: "Running",
        thumbnail_link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.verywellfit.com%2Fthmb%2FFA7LqmnXM77quHgCLvVZIYWkeFA%3D%2F2125x1416%2Ffilters%3Afill(FFDB5D%2C1)%2FGettyImages-598308041-5707ef713df78c7d9ea4f5ee.jpg",
        video_link: "https://www.youtube.com/embed/K6fCnO9TjG0",
        is_featured: false,
        category_id: 1
    }
];

const diagrams = [
    {
        name: "Food Pyramid",
        thumbnail_link: "http://www.first1000days.ie/wp-content/uploads/2013/06/food_pyramid.jpg"
    },
    {
        name: "myPlate",
        thumbnail_link: "https://bloximages.chicago2.vip.townnews.com/columbustelegram.com/content/tncms/assets/v3/editorial/3/12/312ac717-16b8-53eb-8143-74d537644495/5db8b44826554.image.jpg"
    }
];

export function getExerciseLogs(member: FamilyMember) {
    let logs = [];
    for (let i = 0; i < 3; i++) {
        if (exercise_logs[i].family_member_id == member.id)
            logs.push(exercise_logs[i]);
    }
    return Promise.resolve(logs);
}

export function getFamilyMembers(user: User) {
    let members = [];
    for (let i = 0; i < 4; i++) {
        if (family_members[i].user_id == user.id)
            members.push(family_members[i]);
    }
    return Promise.resolve(members);
}

const getExerciseCategories = async (): Promise<ExerciseCategory[]> => {
    return exercise_categories.map((exerciseCategory: any) => {
        return {
            ...exerciseCategory
        } as ExerciseCategory
    });
}

const getDiagrams = async (): Promise<Diagram[]> => {
    return diagrams.map((diagram: any) => {
        return {
            ...diagram
        } as Diagram
    });
}

const getDemonstrations = async (): Promise<Demonstration[]> => {
    return demos.map((demo: any) => {
        return {
            ...demo
        } as Demonstration
    });
}

const getRecipeCategories = async (): Promise<RecipeCategory[]> => {
    return recipe_categories.map((recipeCategory: any) => {
        return {
            ...recipeCategory
        } as RecipeCategory
    });
}

const getExercises = async (): Promise<Exercise[]> => {
    return exercises.map((exercise: any) => {
        return {
            ...exercise
        } as Exercise
    });
}

const getRecipes = async (): Promise<Recipe[]> => {
    return recipes.map((recipe: any) => {
        return {
            ...recipe
        } as Recipe
    });
}

function isLoggedIn() {
    return false;
}

function getFeaturedExercise() {
    for (let i = 0; i < 4; i++) {
        if (exercises[i].is_featured)
            return Promise.resolve(exercises[i]);
    }
}
function getFeaturedRecipe() {
    for (let i = 0; i < 4; i++) {
        if (recipes[i].is_featured)
            return Promise.resolve(recipes[i]);
    }
}
const API = {
    getExerciseLogs,
    getFamilyMembers,
    getRecipes,
    isLoggedIn,
    getFeaturedExercise,
    getFeaturedRecipe,
    getExercises,
    getExerciseCategories,
    getRecipeCategories,
    getDiagrams
};

module.exports = API;