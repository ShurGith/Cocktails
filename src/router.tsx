import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FavoritePage from './views/FavoritePage'
import IndexPage from './views/IndexPage'
import { Layout } from './layouts/Layout'
export default function AppRouter() {
    return (
        <BrowserRouter >
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<IndexPage />} index />
                    <Route path='/favoritos' element={<FavoritePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
