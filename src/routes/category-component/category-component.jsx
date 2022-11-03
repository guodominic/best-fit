import { useParams, Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { CategoriesContext } from "../../contexts/categories-context"
import ProductCard from "../../components/product-card/product-card-component"
import './category-style.scss'

const CategoryComponent = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <Link to='/best-fit/shop'>
                <h2 className="category-title">&#10594;</h2>
            </Link>
            <div className='category-container'>
                {products &&
                    products.map((product) =>
                        (<ProductCard key={product.id} product={product} />)
                    )
                }
            </div>
        </>
    )
}

export default CategoryComponent