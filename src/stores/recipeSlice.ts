import {getCategories} from "../services/RecipeServices";
import { type StateCreator } from "zustand";
import type { Categories } from "../types";

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

export const createRecipiesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    fetchCategories: async () => {
       const categories = await getCategories()
        set({
            categories
        })
     }
})

