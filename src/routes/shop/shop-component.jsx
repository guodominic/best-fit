import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview-component'
import CategoryComponent from '../category-component/category-component'

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<CategoryComponent />} />
        </Routes>
    )
}

export default Shop