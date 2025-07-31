import { create } from 'zustand';
import { devtools } from "zustand/middleware";
import { createRecipiesSlice, type RecipesSliceType } from './recipeSlice'

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a)
})));