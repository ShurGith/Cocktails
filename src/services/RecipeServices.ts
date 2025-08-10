import axios from 'axios';
import { CategoriesAPIResponseSchema, RecipeAPIResponseSchema, DrinksAPIResponse } from '../utils/recipes-schema';
import type { Drink, SearchFilters } from '../types';
export async function getCategories() {
	const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(URL);
    const result = CategoriesAPIResponseSchema.safeParse(data)
	if(result.success) 
        return result.data
}

export async function getRecipes(filters: SearchFilters){
    //www.thecocktaildb.com/api/json/v1/1/filter.php?i=
    //www.thecocktaildb.com/api/json/v1/1/filter.php?c
    
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios(URL);
    //console.log(data.drinks)
    const result = DrinksAPIResponse.safeParse(data)
    //console.log(result);
    if(result.success)
        return result.data
    
}


export async function getRecipeById(id: Drink['idDrink']){
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} = await axios(URL);
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(result.success)
        return result.data  
}