import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
   drink: Drink
}
export default function DrinkCard({ drink }: DrinkCardProps) {
   const getRecipeById = useAppStore((state) => state.selectRecipe);
   return (
      <div className="shadow-lg my-2 rounded-3xl">
         <div>
            <img
               className="object-cover hover:scale-115 hover:rotate-2 hover:rounded-4xl transition-all duration-300 ease-in-out rounded-t-3xl shadow-2xl"
               src={drink.strDrinkThumb}
               alt={`Imagen de ${drink.strDrink}`}
            />
         </div>
         <div className="p-5">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button type="button"
               onClick={() => getRecipeById(drink.idDrink)}
               className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-lg text-white rounded-md cursor-pointer">
               Ver receta
            </button>
         </div>
      </div>
   )
}
