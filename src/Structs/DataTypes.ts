export type Recipe = {
    id: number,
    name: string,
    thumbnail: string,
    cook_time: string,
    prep_time: string,
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
    exerciseCategories?: [ExerciseCategory]
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
    email: string,
    familyMembers?: [FamilyMember]
}

export type FamilyMember = {
    id: number,
    name: string,
    user_id: number,
    User?: User,
}

export type ExerciseLog = {
    id: number,
    type: string,
    intensity: string,
    duration: string,
    name: string,
    date: string
    family_member_id?: number,
    FamilyMember?: FamilyMember
}

export type GameType = {
    [key: string]: any;
    thumbnail: string;
    link: string;
    name: string;
}
