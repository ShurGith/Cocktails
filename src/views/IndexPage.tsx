import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard";
export default function IndexPage() {

  const drinks = useAppStore((state) => state.drinks)
  const hasDrinks = useMemo(() => drinks.drinks.length > 0 , [drinks]);

  return (
    <div>
        <h1 className="text-3xl font-bold underline">Recetas </h1>
          {hasDrinks ? 
          <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
            {drinks.drinks.map(drink => (
           <DrinkCard
              key={drink.idDrink}
              drink={drink}
             />
            ))}
          </div>
          :
        <p className="my-10 text-center text-2xl">No hay resultados todavía, utiliza el buscador para encontrar recetas.</p>
          }
    </div>
  )
}
