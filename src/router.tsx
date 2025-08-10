import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/Layout'

//import IndexPage from './views/IndexPage'
//import FavoritePage from './views/FavoritePage'

const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritePage = lazy(() => import('./views/FavoritePage'))

export default function AppRouter() {
    return (
        <BrowserRouter >
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Suspense fallback="Loading..."><IndexPage /></Suspense>} index />
                    <Route path='/favoritos' element={<Suspense fallback="Loading..."><FavoritePage /></Suspense>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
