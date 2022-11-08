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