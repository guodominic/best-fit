import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { CategoriesContext } from "../../contexts/categories-context"
import ProductCard from "../../components/product-card/product-card-component"
import './category-style.scss'

const CategoryComponent = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    console.log(category)
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    console.log(categoriesMap[category])
    return (
        <div className='category-container'>
            {products &&
                products.map((product) =>
                    (<ProductCard key={product.id} product={product} />)
                )
            }
        </div>
    )
}

export default CategoryComponent