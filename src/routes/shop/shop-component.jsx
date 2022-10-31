import { useContext } from 'react'
import PRODUCTS from '../../shop-data.json'
import ProductCard from '../../components/product-card/product-card-component'
import { ProductsContext } from '../../contexts/products-context'
import './shop-style.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className='product-container'>
            {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop