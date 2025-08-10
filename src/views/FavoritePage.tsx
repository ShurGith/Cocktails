import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritePage() {
  const favorites = useAppStore((state) => state.favorites)
  const hasOne = useMemo(() => favorites.length > 0, [favorites])
  return (
    <>
      <h1 className='text-6xl font-extrabold '>Favoritos</h1>
      {hasOne ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {favorites.map(fav => (
          <DrinkCard key={fav.idDrink} drink={fav} />
        ))}
      </div>
      ) : (
        <p>No hay favoritos</p>
      )}
    </>
  )
}
