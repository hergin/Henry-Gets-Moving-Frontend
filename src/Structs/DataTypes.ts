export type Recipe = {
    id: number,
    name: string,
    thumbnail: string,
    category_id: number,
    isFeatured: boolean,
    recipeCategory: RecipeCategory
}
export type RecipeCategory = {
    id: number,
    name: string
}

export type Exercise = {
    id: number,
    name: string,
    videoLink: string,
    isFeatured: boolean,
    category_id: number,
    exerciseCategory: ExerciseCategory
}
export type ExerciseCategory = {
    id: number,
    name: string
}

export type User = {
    id: number,
    email: string
}

export type FamilyMember = {
    id: number,
    name: string,
    user_id: number,
    User: User
}
