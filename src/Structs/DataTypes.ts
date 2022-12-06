export type Recipe = {
    id: number,
    name: string,
    thumbnail: string,
    cook_time: string,
    ingredients: string,
    recipe_steps: string,
    category_id: number,
    is_featured: boolean,
    recipeCategory?: RecipeCategory
}
export type RecipeCategory = {
    id: number,
    name: string
}

export type Exercise = {
    id: number,
    name: string,
    thumbnail_link: string,
    video_link: string,
    is_featured: boolean,
    category_id: number,
    exerciseCategory?: ExerciseCategory
}
export type ExerciseCategory = {
    id: number,
    name: string
}

export type Demonstration = {
    id: number,
    name: string,
    thumbnail_link: string,
    video_link: string,
    demonstration_category_id: number
    demonstrationCategory?: DemonstrationCategory
}

export type Diagram = {
    id: number,
    name: string,
    thumbnail_link: string
}

export type DemonstrationCategory = {
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
    User?: User,
    exerciseLog: ExerciseLog[]
}

export type ExerciseLog = {
    id: number,
    type: string,
    intensity: string,
    duration: string,
    family_member_name: string,
    FamilyMember?: FamilyMember,
    createdAt: Date
}
