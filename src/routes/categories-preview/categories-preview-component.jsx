import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview-component'
import { CategoriesContext } from '../../contexts/categories-context'
import './categories-preview.styles.scss'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <div className='categories-preview-container'>
            <h1 style={{ paddingLeft: '45%' }}>SHOP</h1>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title]
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            }
            )}
        </div>
    )
}

export default CategoriesPreview