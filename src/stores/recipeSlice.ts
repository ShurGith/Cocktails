import { getCategories, getRecipes, getRecipeById } from "../services/RecipeServices";
import { type StateCreator } from "zustand";
import type { Categories, Drink, Drinks, Recipe, SearchFilters } from "../types";

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipiesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        //console.log(drinks);
        set({
            drinks
        })
    },
    selectRecipe: async (idDrink) => {
        const selectedRecipe = await getRecipeById(idDrink)
        set ({
            selectedRecipe,
            modal: true,
        })
    },
    closeModal: ()=> {
        set({
            modal:false,
            selectedRecipe: {} as Recipe
        })
    },
})

