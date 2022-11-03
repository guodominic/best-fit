import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview-component'
import CategoryComponent from '../category-component/category-component'
import ProductComponent from '../product-details/product-component'

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<CategoryComponent />} />
            <Route path=':id' element={<ProductComponent />} />
        </Routes>
    )
}

export default Shop