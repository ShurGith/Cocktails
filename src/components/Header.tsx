import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";


export default function Header() {
   const { pathname } =  useLocation();;
   const isHome = useMemo(() => pathname === '/', [pathname]);
   const fetchCategories = useAppStore((state) => state.fetchCategories);
   const categories = useAppStore((state) => state.categories);


   useEffect(() => {
      fetchCategories();
   }, [])

   return (
      <header className={isHome ?  " bg-[url(/bg.jpg)] bg-cover bg-no-repeat" : "bg-slate-800"}>
         <div className='mx-auto container px-5 py-16 text-white  '>
            <div className="flex justify-between items-center">
               <div>
                  <img className='w-32' src="/logo.svg" alt="logotipo" />
               </div>
               <div className="space-x-5 flex gap-4 uppercase ">
                  <NavLink to="/" className={({ isActive }) => (isActive ? 'text-orange-400' : '')}>Home</NavLink>
                  <NavLink to="/favoritos" className={({ isActive }) => (isActive ? 'text-orange-400 ' : '')}>Favoritos</NavLink>
               </div>
            </div>
            {isHome && (
               <div >
                  <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                     <div className="space-y-4">
                        <label htmlFor="ingredient"
                           className='block text-white uppercase font-extrabold text-lg'
                        >Nombre o Ingredientes</label>
                        <input type="text"
                           className='p-3 w-full rounded-lg focus:outline-none bg-white text-gray-600'
                           id="ingredient"
                           name="ingredient"
                           placeholder="Nombre o Ingrediente. Ej. Gin, Vodka, Tequila.." />
                     </div>
                     <div className="space-y-4">
                        <label htmlFor="category"
                           className='block text-white uppercase font-extrabold text-lg'
                        >Categoría</label>
                        <select
                           className='p-3 w-full rounded-lg focus:outline-none bg-white text-gray-600' 
                           id="category"
                           name="category" >
                           <option value="">--Selecciona una categoría--</option>
                           {categories.drinks.map(category => (
                              <option key={category.strCategory} 
                              value={category.strCategory}>
                                 {category.strCategory}
                           </option>))   
                           }
                        </select>
                     </div>
                     <input
                        type='submit'
                        value='Buscar Recetas'
                        className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
                     />
                  </form>
               </div>
            )}
         </div>
      </header>
   )
}
