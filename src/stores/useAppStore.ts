import { create } from 'zustand';
import { devtools } from "zustand/middleware";
import { createRecipiesSlice, type RecipesSliceType } from './recipeSlice'
import { createFavoritesSlice, type FavoritesSliceType } from './favoritedSlice'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
})));