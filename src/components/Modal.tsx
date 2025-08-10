import { Dialog, Transition } from '@headlessui/react';
import { Fragment, type JSX } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { type Recipe } from '../types';

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectRecipe = useAppStore((state) => state.selectedRecipe);
  const handleFavorite = useAppStore((state) => state.handleFavorite);
  const favoriteExists = useAppStore((state) => state.favoriteExists);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = selectRecipe[`strIngredient${i}` as keyof Recipe]
      const measure = selectRecipe[`strMeasure${i}` as keyof Recipe]

      if (ingredient) {
        ingredients.push(
          <li key={i}
            className='list-disc text-lg font-normal'>
            {ingredient}
            {measure ? ` - (${measure})` : ''}
          </li>
        )
      }
    }
    return ingredients
  }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                    {selectRecipe.strDrink}
                    <img src={selectRecipe.strDrinkThumb} alt={selectRecipe.strDrink}
                      className="mx-auto w-96" />
                  </Dialog.Title>{renderIngredients()}
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrcciones
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-gray-900 my-5">
                    {selectRecipe.strInstructions}
                  </Dialog.Title>
                  <div className='flex gap-2'>
                    <button onClick={() => closeModal()} className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-auto block cursor-pointer">Cerrar</button>
                    <button onClick={() => {
                      handleFavorite(selectRecipe);
                      closeModal();
                    }}
                      className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-auto block cursor-pointer">
                      {favoriteExists(selectRecipe.idDrink) ? "Eliminar de favoritos" : "Añadir a favoritos"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}